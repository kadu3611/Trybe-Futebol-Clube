import { Router } from 'express';

import UserController from '../controller/users.controller';
import UserService from '../services/user.service';

const userService = new UserService();
const userController = new UserController(userService);
const userRouter = Router();

userRouter.post('/login', (req, res) => userController.generationToken(req, res));

export default userRouter;
