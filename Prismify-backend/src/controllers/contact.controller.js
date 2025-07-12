import Contact from '../models/contacts.models.js';

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
