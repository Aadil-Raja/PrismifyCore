import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sequelize from '../db/sequelize.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';


export const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // 1. Get admin by username
    const [results] = await sequelize.query(
      'SELECT * FROM admins WHERE username = ? LIMIT 1',
      { replacements: [username] }
    );

    const admin = results[0];

    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 3. Update last login
    await sequelize.query(
      'UPDATE admins SET lastLogin = NOW() WHERE id = ?',
      { replacements: [admin.id] }
    );

    // 4. Generate token
    const token = jwt.sign(
      { adminId: admin.id },
      JWT_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY || '1d' }
    );

    // 5. Set token in HttpOnly cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: false, // only true in (https)
      sameSite: 'Strict', // or 'Lax' depending on your frontend domain
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    res.json({ message: 'Login successful',token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

