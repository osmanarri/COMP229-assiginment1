const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, addUser, updateUserById, deleteUserById, deleteAllUsers } = require('../controllers/userController');

// Routes
router.get('/', getAllUsers);  // Get all users
router.post('/', addUser);  // Add a new user
router.get('/:id', getUserById);  // Get a user by ID
router.put('/:id', updateUserById);  // Get a user by ID
router.delete('/:id', deleteUserById) // Delete a user by ID
router.delete('/', deleteAllUsers) // Delete all users

module.exports = router;