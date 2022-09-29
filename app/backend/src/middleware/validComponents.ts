// import * as jwt from 'jsonwebtoken';
// import * as bcrypt from 'bcryptjs';
// import { NextFunction, Request, Response } from 'express';
// import UserService from '../services/user.service';

// export default function returnToken(req: Request, res: Response, next: NextFunction) {
//   const { email, password } = Object(req.body);
//   const regex = /\S+@\S+\.\S+/;
//   if (regex.test(email)) {
//     return res.status(200).json();
//   }

//   next();
// }
