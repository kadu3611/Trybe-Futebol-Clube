import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';
import { IMatchesC } from '../Interfaces/IMatches';

export default class MatshesController implements IMatchesC {
  constructor(private service: MatchesService) {
  }

  async allMatches(req: Request, res: Response): Promise<Response> {
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
    const matchesSave = req.body;
    const saveMatches = await this.service.createMatches(matchesSave);
    return res.status(201).json(saveMatches);
  }

  async updateMatches(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const numberId = parseInt(id, 10);
    await this.service.updateMatches(numberId);
    console.log(numberId);
    return res.status(200).json({ message: 'Finished' });
  }

  async updateTeams(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const numberId = parseInt(id, 10);
    const allTeams = req.body;
    await this.service.updateTeams(numberId, allTeams);
    return res.status(200).json({ message: 'Bora Bill!' });
  }
}
