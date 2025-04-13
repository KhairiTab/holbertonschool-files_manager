// server.js
import express from 'express';
import routes from './routes/index.js';
import dotenv from 'dotenv';

// Load environment variables from .env file if present
dotenv.config();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Load all routes
app.use('/', routes);

// Get the port from environment or use 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
