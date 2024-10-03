const User = require('../models/userModel');
const bcrypt = require('bcrypt')

// Get all users (GET method)
const getAllUsers = async (req, res) => {
    try {
      const users = await User.find({});
      
      if (users.length === 0) {
        return res.status(404).json({ message: 'No users found.' });
      }
      
      // Return the users if found
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({ error: 'Internal server error.' });
    }
  };

// Get user by ID (GET method)
const getUserById = async(req, res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)

        if(!user){
            return res.status(404).json({error: 'User not found.'})
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
        console.error('Error fetching user by ID:', error.message);
    }
}

// Add new user (POST method)
const addUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if all required fields are provided
      if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
      }
  
      // Check if User with this email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists.' });
      }
      
      // hash password
      const hashedPassword = await bcrypt.hash(password, 10)
      // Create new User
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword
      });
  
      res.status(201).json({
        message: 'User created successfully.',
        user: newUser
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error.' });
      console.error('Error adding user:', error);
    }
  };

  const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email} = req.body;

        // Find User by ID
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Update the User
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email },
            { new: true } 
        );

        res.status(200).json({ message: 'User updated successfully.', updatedUser });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
        console.error('Error updating User by ID:', error.message);
    }
};


// Delete User by ID (DELETE method)
const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Find the User by ID
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Delete the User
        const deletedUser = await User.findByIdAndDelete(id);
        
        res.status(200).json({
            message: 'User deleted successfully.',
            deletedUser
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
        console.error('Error deleting User by ID:', error.message);
    }
};

// Delete all Users (DELETE method)
const deleteAllUsers = async (req, res) => {
    try {
        // Delete all Users in the collection
        const result = await User.deleteMany();
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No Users to delete.' });
        }

        res.status(200).json({
            message: 'All Users deleted successfully.',
            deletedCount: result.deletedCount
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
        console.error('Error deleting all Users:', error.message);
    }
};
  

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUserById,
    deleteUserById,
    deleteAllUsers
};