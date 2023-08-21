const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
const jwt = require('jsonwebtoken')

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://Dxcoding1:Dxcoding1@cluster0.icax6s7.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('MongoDB connection error:', error);
    });

app.post('/api/register', async (req, res) => {
    try {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        };

        const createdUser = await User.create(newUser);
        res.status(201).json({ status: 'ok', user: createdUser });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ status: 'error', message: 'Duplicate email' });
        } else {
            res.status(500).json({ status: 'error', message: 'An error occurred during registration.' });
        }
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        });


        if (user) {
            const token = jwt.sign({
                email: user.email,
                name: user.name,
            }, 'secret123');
            res.status(200).json({ status: 'ok', user: token,  });
        } else {
            res.status(404).json({ status: 'ok', user: false });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ status: 'error', message: 'An error occurred during login.' });
    }
});

app.post('/api/quote', async (req, res) => {
   req.json("quote")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
