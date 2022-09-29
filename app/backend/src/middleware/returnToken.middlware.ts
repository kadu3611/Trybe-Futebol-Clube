// import { NextFunction, Request, Response } from 'express';
// import UserService from '../services/user.service';

// export default function returnToken(req: Request, res: Response, next: NextFunction) {
//   const { email, password } = Object(req.body);
//   const { email: userEmail, password: userPassword } = Object(new UserService().findOne(email));
//   const verify = bcrypt.compareSync(userPassword, password);
//   if (!verify) {
//     return res.status(400).json({ message: 'Erro' });
//   }

//   next();
// }
