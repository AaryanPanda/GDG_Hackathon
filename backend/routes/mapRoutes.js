import express from 'express';
import mapsController from './mapsController.js';

const router = express.Router();

router.get('/nearby-places', mapsController);

export default router;
