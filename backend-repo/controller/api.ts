import { NextFunction, Request, Response } from 'express';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../config/firebaseConfig';
import { ApiError } from '../entities/ApiError';
import { IUser } from '../interfaces/user.interface';
import { addUser, fetchUsers, updateUser } from '../repository/useCollection';

class Api {

  // GET
  async fetchUser(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await fetchUsers();
      res.status(200).json({ data: users });
    } catch (error) {
      next(new ApiError(400, 'Error while fetching users: ' + (error as Error).message));
    }
  }

  // POST
  async addUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.body as IUser;
      const userId = await addUser(user);

      res.status(201).send(`User added with Email: ${user.email}`);
    } catch (error) {
      next(new ApiError(400, 'Error adding user: ' + (error as Error).message));
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await signInWithEmailAndPassword(auth, email, password);
      const token = await user.user.getIdToken();

      res.status(200).send({ token });
    } catch (error) {
      next(new ApiError(400, 'Error logging in: ' + (error as Error).message));
    }
  }

  // PUT
  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = req.body as Partial<IUser>;
      await updateUser(id, user);

      res.status(200).send(`User with ID: ${id} updated successfully.`);
    } catch (error) {
      next(new ApiError(400, 'Error updating user: ' + (error as Error).message));
    }
  }
}

export default new Api();
