import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { signupSchema, loginSchema } from '../zodSchema/index.js';
import { Student, Admin, Teacher } from '../models/index.js'; // Include Teacher model
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Signup as Student, Admin, or Teacher
router.post("/signup", async (req, res) => {
  try {
    const validatedData = signupSchema.parse(req.body);
    const { name, email, password, role = 'student' } = validatedData;

    const userExists = role === 'student' 
      ? await Student.findOne({ email }) 
      : role === 'teacher'
      ? await Teacher.findOne({ email }) // Check if the user is a teacher
      : await Admin.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: `${role.charAt(0).toUpperCase() + role.slice(1)} already exists` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = role === 'student'
      ? new Student({ name, email, password: hashedPassword })
      : role === 'teacher'
      ? new Teacher({ name, email, password: hashedPassword }) // Create a new teacher
      : new Admin({ name, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: `${role.charAt(0).toUpperCase() + role.slice(1)} registered successfully` });
  } catch (error) {
    res.status(400).json({ message: "Validation Error", error: error.errors });
  }
});

// Login as Student, Admin, or Teacher
router.post("/login", async (req, res) => {
  try {
    const validatedData = loginSchema.parse(req.body);
    const { email, password, role } = validatedData;

    const user = role === 'student'
      ? await Student.findOne({ email })
      : role === 'teacher'
      ? await Teacher.findOne({ email }) // Fetch user as teacher
      : await Admin.findOne({ email });

    if (!user) return res.status(400).json({ message: `${role.charAt(0).toUpperCase() + role.slice(1)} not found` });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.json({
      message: `${role.charAt(0).toUpperCase() + role.slice(1)} logged in successfully`,
      token,
      role, // Include the role in the response
      _id: user._id,
    });
    
  } catch (error) {
    console.error("Validation error details:", error.errors);
    res.status(400).json({ message: "Validation Error", error: error.errors });
  }
});

export default router;
