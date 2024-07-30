import { NextFunction, Request, Response } from 'express';

import { ApiError } from '../entities/ApiError';

export const errorHandler = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    });

    if (process.env.NODE_ENV === 'development') {
        console.error(err);
    }
};
