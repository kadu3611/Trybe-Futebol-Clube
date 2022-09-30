import { Response, Request } from 'express';

interface ITeamS {
  findAll(): Promise<object>,
  //   findByPk(id: number): Promise<object | null>,

}
export default ITeamS;

interface ITeamC{
  findAll(req: Request, res: Response): Promise<Response>,
  //   findByPk(req: Request, res: Response): Promise<Response>,

}

export { ITeamC };
