// server.js
import express from 'express';
import routes from './routes/index.js'; // <-- Include .js if using ESM

// Create Express application
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Load routes
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
