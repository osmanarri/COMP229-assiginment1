
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes')
const userRoutes = require('./routes/userRoutes');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Skeleton')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Basic route
app.get('/api/welcome', (req, res) => {
    res.json({ message: 'Welcome to DressStore application.' });
});

// Start server
app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000`);
});
