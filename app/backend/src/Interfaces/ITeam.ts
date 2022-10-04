import { Response, Request } from 'express';
import TeamsModel from '../database/models/3-Teams.models';

interface ITeamS {
  findAll(): Promise<TeamsModel[]>,
  //   findByPk(id: number): Promise<object | null>,

}
export default ITeamS;

interface ITeamC{
  findAll(req: Request, res: Response): Promise<Response>,
  //   findByPk(req: Request, res: Response): Promise<Response>,

}

export { ITeamC };
