import express from 'express';
import mapController from '../controllers/mapController.js';

const mapRouter = express.Router();
mapRouter.get('/nearby-places', mapController);

export default mapRouter;
