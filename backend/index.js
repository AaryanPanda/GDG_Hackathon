const express = require("express");
const cors = require("cors")
const userRouter = require("./routes/user.routes")
require('dotenv').config();

const PORT = Number(process.env.PORT);

const app = express();

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Welcome to RecycLab Backend" })
})

app.use("/user", userRouter)

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`)
})