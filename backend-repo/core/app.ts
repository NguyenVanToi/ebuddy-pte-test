import cors from 'cors';
import express, { Application } from 'express';

import { errorHandler } from '../middleware/errorHandler';
import userRoutes from '../routes/userRoutes';

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

// Use routes
app.use('/api/users', userRoutes);


// Error handling middleware
app.use(errorHandler);

export default app;