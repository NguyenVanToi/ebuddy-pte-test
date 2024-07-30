import { Router } from 'express';

import api from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const userRoutes = Router();

// Fetch user collection from Firestore data
userRoutes.get('/', authMiddleware, api.fetchUser);

// Authenticate a user
userRoutes.post('/create', authMiddleware, api.addUser);

// Update a user to Firestore
userRoutes.put('/:id', authMiddleware, api.updateUser);

// Authenticate a user
userRoutes.post('/login', api.login);

export default userRoutes;