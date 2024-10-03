const express = require('express');
const router = express.Router();
const { getAllContacts, getContactById, addContact, updateContactById, deleteContactById, deleteAllContacts } = require('../controllers/contactController');

// Routes
router.get('/', getAllContacts);  // Get all contacts
router.post('/', addContact);  // Add a new contact
router.get('/:id', getContactById);  // Get a contact by ID
router.put('/:id', updateContactById);  // Get a contact by ID
router.delete('/:id', deleteContactById) // Delete a contact by ID
router.delete('/', deleteAllContacts) // Delete all contacts



module.exports = router;
