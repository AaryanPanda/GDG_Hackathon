import express from "express";
import { signup, signin, logout } from "../controllers/authController.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", authenticateToken, logout);  

export default router;
