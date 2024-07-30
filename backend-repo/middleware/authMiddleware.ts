import { NextFunction, Request, Response } from 'express';

import { authAdmin } from '../config/firebaseAdmin';
import { ApiError } from '../entities/ApiError';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split('Bearer ')[1];

  if (!token) {
    return next(new ApiError(401, 'Unauthorized: No token provided'));
  }

  try {
    const decodedToken = await authAdmin.verifyIdToken(token);
    res.locals.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error:', error);
    return next(new ApiError(401, 'Unauthorized: Token is invalid!'));
  }
};