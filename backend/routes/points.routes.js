import express from 'express';
import PointModel from "../models/pointSchema.js"; // Add .js extension

const pointRouter = express.Router();

pointRouter.get('/get', async (req, res) => {
    const userId = req.user.id;
    const data = await PointModel.find({ userId }); // Corrected find syntax
    res.send({ point: data });
});

pointRouter.post('/add', async(req, res)=>{
    const {points} = req.body.data;
    const newPoints = new PointModel({userId: req.user.id, points});
     
})

pointRouter.get('/total-points', async (req, res) => {
    const userId = req.user.id;
    res.send({ message: "hello" });
});

export default pointRouter;