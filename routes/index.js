// routes/index.js
import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

const router = express.Router();

// App status and stats
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

// User routes
router.post('/users', UsersController.postNew);
router.get('/users/me', UsersController.getMe);

export default router;