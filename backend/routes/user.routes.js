const { Router } = require("express");

const userRouter = Router();

userRouter.get("/sign-in", (req, res) => {
    res.send({ message: "Welcome to sign-in route" })
})
userRouter.post("/sign-in", (req, res) => {
    res.send({ message: "Welcome to sign-in route" })
})

module.exports = userRouter;