import express from 'express';
import { submitContactForm,getAllContacts } from '../controllers/contact.controller.js';

const router = express.Router();

router.route('/').post(submitContactForm);
router.route('/get-all-contacts').get(getAllContacts)
  
export default router;
