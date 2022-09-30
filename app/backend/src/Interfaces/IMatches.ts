// import UserModel from '../database/models/1-User-models';
import { Response, Request } from 'express';

interface IMatchesS {
  findAll(): Promise<object>,
  //   findByPk(id: number): Promise<object | null>,

}
export default IMatchesS;

interface IMatchesC{
  findAll(req: Request, res: Response): Promise<Response>,
  //   findByPk(req: Request, res: Response): Promise<Response>,

}

export { IMatchesC };
