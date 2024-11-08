import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const JWT_SECRET = "your_jwt_secret";  // Use an environment variable in production

// Sign-Up Controller
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body.data;
    console.log(name, email, password)
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    console.log(15);
    
    const user = new User({ name, email, password });
    console.log(user);
    await user.save();
    console.log(user);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// Sign-In Controller
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body.data;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",  // Token expires in 1 hour
    });

    res.json({ message: "Signed in successfully", token, name: user.name});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Logout Controller
export const logout = (req, res) => {
  res.json({ message: "Logged out successfully" });
};
