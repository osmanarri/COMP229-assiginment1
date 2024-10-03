const Contact = require('../models/contactModel');

// Get all contacts (GET method)
const getAllContacts = async (req, res) => {
    try {
      const contacts = await Contact.find({});
      
      // Check if the contact list is empty
      if (contacts.length === 0) {
        return res.status(404).json({ message: 'No contacts found.' });
      }
      
      // Return the contacts if found
      res.status(200).json(contacts);
    } catch (error) {
      console.error('Error fetching contacts:', error.message);
      res.status(500).json({ error: 'Internal server error.' });
    }
  };

// Get contact by ID (GET method)
const getContactById = async(req, res) => {
    try {
        const {id} = req.params
        const contact = await Contact.findById(id)

        if(!contact){
            return res.status(404).json({error: 'Contact not found.'})
        }

        res.status(200).json(contact)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
        console.error('Error fetching contact by ID:', error.message);
    }
}

// Add new contact (POST method)
const addContact = async (req, res) => {
    try {
      const { firstName, lastName, email } = req.body;
  
      // Check if all required fields are provided
      if (!firstName || !lastName || !email) {
        return res.status(400).json({ error: 'All fields are required.' });
      }
  
      // Check if contact with this email already exists
      const existingContact = await Contact.findOne({ email });
      if (existingContact) {
        return res.status(400).json({ error: 'Contact already exists.' });
      }
  
      // Create new contact
      const newContact = await Contact.create({
        firstName,
        lastName,
        email
      });
  
      res.status(201).json({
        message: 'Contact created successfully.',
        contact: newContact
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error.' });
      console.error('Error adding contact:', error);
    }
  };

  const updateContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email } = req.body;

        // Find contact by ID
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found.' });
        }

        // Update the contact
        const updatedContact = await Contact.findByIdAndUpdate(
            id,
            { firstName, lastName, email },
            { new: true } 
        );

        res.status(200).json({ message: 'Contact updated successfully.', updatedContact });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
        console.error('Error updating contact by ID:', error.message);
    }
};


// Delete contact by ID (DELETE method)
const deleteContactById = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Find the contact by ID
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found.' });
        }

        // Delete the contact
        const deletedContact = await Contact.findByIdAndDelete(id);
        
        res.status(200).json({
            message: 'Contact deleted successfully.',
            deletedContact
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
        console.error('Error deleting contact by ID:', error.message);
    }
};

// Delete all contacts (DELETE method)
const deleteAllContacts = async (req, res) => {
    try {
        // Delete all contacts in the collection
        const result = await Contact.deleteMany();
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No contacts to delete.' });
        }

        res.status(200).json({
            message: 'All contacts deleted successfully.',
            deletedCount: result.deletedCount
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
        console.error('Error deleting all contacts:', error.message);
    }
};
  

module.exports = {
    getAllContacts,
    getContactById,
    addContact,
    updateContactById,
    deleteContactById,
    deleteAllContacts
};