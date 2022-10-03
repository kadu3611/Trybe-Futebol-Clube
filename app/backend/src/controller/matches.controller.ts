import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';
import { IMatchesC } from '../Interfaces/IMatches';

export default class MatshesController implements IMatchesC {
  constructor(private service: MatchesService) {
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const { query } = req;
    const queryKey = String(Object.keys(query));
    const inprogressQuery = String(Object.values(query));
    if (queryKey === 'inProgress') {
      const inprogressNew = await this.service.filterProgressTeam(inprogressQuery);
      return res.status(200).json(inprogressNew);
    }
    const allMatches = await this.service.allMatches();
    return res.status(200).json(allMatches);
  }

  async createMatches(req: Request, res: Response): Promise<Response> {
    const saveMatches = await this.service.createMatches(req.body);
    return res.status(200).json(saveMatches);
  }
}
