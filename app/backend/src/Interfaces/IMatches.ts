// import UserModel from '../database/models/1-User-models';
import { Response, Request } from 'express';
import Matches from '../database/models/2-Matches.model';

interface IMatchesS {
  allMatches(): Promise<Matches[]>,
  filterProgressTeam(string: string):Promise<Matches[]>,
  createMatches(object: object): Promise<object>,
  updateMatches(number: number): Promise<void>
  updateTeams(number: number, object: object): Promise<object>

}
export default IMatchesS;

interface IMatchesC{
  allMatches(req: Request, res: Response): Promise<Response>,
  createMatches(req: Request, res: Response): Promise<Response>,
  updateMatches(req: Request, res: Response): Promise<Response>,
  updateTeams(req: Request, res: Response): Promise<Response>

}

export { IMatchesC };
