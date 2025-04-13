// routes/index.js
import express from 'express';
import AppController from '../controllers/AppController';

const router = express.Router();

// App status and stats
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

// User routes
router.post('/users', UsersController.postNew);
export default router;