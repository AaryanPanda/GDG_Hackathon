import mongoose from 'mongoose';

const PointsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
});

const PointModel = mongoose.model('point', PointsSchema);

export default PointModel;
