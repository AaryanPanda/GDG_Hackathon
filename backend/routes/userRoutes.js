import express from "express";
import { signup, signin, logout } from "../controllers/userController.js";
import { authenticateToken } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.post("/logout", authenticateToken, logout);

export default userRouter;
