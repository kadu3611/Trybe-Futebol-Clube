import { Router } from 'express';

import UserController from '../controller/users.controller';
import UserService from '../services/user.service';
import validComponents from '../middleware/validComponents';

const userService = new UserService();
const userController = new UserController(userService);
const userRouter = Router();

userRouter.post('/login', validComponents, (req, res) => userController.generationToken(req, res));
userRouter.get('/login/validate', (req, res) => userController.validatToken(req, res));

export default userRouter;
