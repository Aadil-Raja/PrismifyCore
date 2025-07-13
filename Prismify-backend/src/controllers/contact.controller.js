import Contact from '../models/contacts.models.js';
import sequelize from '../db/sequelize.js';

// GET /api/contacts (using raw SQL)
export const getAllContacts = async (req, res) => {
  try {
    const [contacts] = await sequelize.query(
      'SELECT * FROM contacts ORDER BY createdAt DESC'
    );

    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Failed to fetch contacts' });
  }
};

// POST /api/contact (submit contact form)
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    // Save to DB
    const newContact = await Contact.create({ name, email, company, message });

    res.status(201).json({
      message: 'Contact form submitted successfully.',
      contact: newContact,
    });
  } catch (err) {
    console.error('Error submitting contact form:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};
