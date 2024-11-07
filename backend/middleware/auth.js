import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;  

export const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;  // Attach user information from token
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token." });
  }
};
