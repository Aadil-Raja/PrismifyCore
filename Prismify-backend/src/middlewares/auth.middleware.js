import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

export const verifyAdminToken = (req, res, next) => {
  // 1. Try to get token from Authorization header
  let token = req.headers.authorization?.split(' ')[1]; // Bearer <token>

  // 2. If not found, try to get token from cookies
  if (!token && req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  // 3. If still no token, respond with 401
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.adminId = decoded.adminId;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Forbidden - Invalid token' });
  }
};
