import express from 'express';
import { submitContactForm,getAllContacts,deleteContact } from '../controllers/contact.controller.js';

const router = express.Router();

router.route('/').post(submitContactForm);
router.route('/get-all-contacts').get(getAllContacts)
router.route('/delete-contact/:id').delete(deleteContact);  
export default router;
