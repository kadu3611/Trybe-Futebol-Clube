import { Response, Request } from 'express';

export default interface UserController{
  generationToken(req: Request, res: Response): Promise<Response>,
}
