import { Response, Request } from 'express';
import UserService from '../services/user.service';
import IUserController from '../Interfaces/UserController';

export default class UserController implements IUserController {
  constructor(private service: UserService) {
  }

  async generationToken(req: Request, res: Response): Promise<Response> {
    const object = Object(req.body);
    const token = await this.service.generationToken(object);
    if (!token) {
      return res.status(400).json({ message: 'Error' });
    }
    return res.status(200).json({ token });
  }
}
