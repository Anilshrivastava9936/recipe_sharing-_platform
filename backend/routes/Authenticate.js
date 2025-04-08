import User from '../models/User.js';  // Add '.js' at the end of the path
import jwt from 'jsonwebtoken';
import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';


dotenv.config();
const router = express.Router();


// API Registration Page http://localhost:3000/register
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, email, password: hashPassword });

        // Save the new user to the database
        await newUser.save();
        console.log("New user created...");
        const token = jwt.sign({ id: User._id }, process.env.JWT_SECRET, { expiresIn: "48h" });
        res.json({ token,User, message: "User registered successful" });
        // res.status(201).json({ message: "User registered successfully" });
       
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
});

// API Login Page
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare the password with the stored hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "48h" });
        res.json({ token, message: "Login successful", user: {  id: user._id, name: user.name, email: user.email } });
        // Send a success message along with the username
        // res.status(200).json({ message: "Login successful", userdata: user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
