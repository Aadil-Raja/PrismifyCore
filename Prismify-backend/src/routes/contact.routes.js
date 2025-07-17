import express from 'express';
import { submitContactForm,getAllContacts,deleteContact } from '../controllers/contact.controller.js';
import { verifyAdminToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.route('/').post(submitContactForm);
router.route('/get-all-contacts').get(verifyAdminToken,getAllContacts)
router.route('/delete-contact/:id').delete(verifyAdminToken,deleteContact);  
export default router;
