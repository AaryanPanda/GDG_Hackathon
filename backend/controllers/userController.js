import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const JWT_SECRET = "your_jwt_secret";  // Use an environment variable in production

// Sign-Up Controller
export const signup = async (req, res) => {
  try {
    User
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Sign-In Controller
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",  // Token expires in 1 hour
    });

    res.json({ message: "Signed in successfully", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Logout Controller
export const logout = (req, res) => {
  res.json({ message: "Logged out successfully" });
};
