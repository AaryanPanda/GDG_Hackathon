import express from 'express';
import mapController from '../controllers/mapController.js';

const router = express.Router();

router.get('/nearby-places', mapController);

export default router;