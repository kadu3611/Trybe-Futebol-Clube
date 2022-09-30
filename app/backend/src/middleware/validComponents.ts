import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';

export default async function validComponents(req: Request, res: Response, next: NextFunction) {
  const { email, password } = Object(req.body);
  //   const regex = /\S+@\S+\.\S+/;
  const { email: userEmail } = await Object(new UserService().findOne(email));
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!userEmail) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  next();
}
