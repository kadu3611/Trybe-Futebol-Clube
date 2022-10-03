// import UserModel from '../database/models/1-User-models';
import { Response, Request } from 'express';
import Matches from '../database/models/2-Matches.model';

interface IMatchesS {
  allMatches(): Promise<Matches[]>,
  filterProgressTeam(string: string):Promise<Matches[]>,
  createMatches(object: object): Promise<object>

}
export default IMatchesS;

interface IMatchesC{
  findAll(req: Request, res: Response): Promise<Response>,
  createMatches(req: Request, res: Response): Promise<Response>

}

export { IMatchesC };
