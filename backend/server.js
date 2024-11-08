import express from 'express';
import cors from 'cors';
import { connectToDB, isConnected } from "./database.js";
import { authenticateToken } from './middleware/auth.js';
import pointRouter from './routes/points.routes.js';
import userRouter from './routes/userRoutes.js';
import mapRoutes from './routes/mapRoutes.js';

const PORT = Number(process.env.PORT);

const app = express();

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Welcome to RecycLab Backend" })
})

app.get('/status', (req, res) => {
    res.json({
        message: 'pong',
        database: isConnected() ? 'connected' : 'not connected'
    });
});


app.use("/user", userRouter)

app.use('/api', mapRoutes);

// app.use(authenticateToken());
app.use('/points', pointRouter);

app.listen(PORT, async () => {
    await connectToDB();
    console.log(`App running on port: ${PORT}`)
})