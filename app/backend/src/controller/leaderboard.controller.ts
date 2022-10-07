import { Request, Response } from 'express';
// import MatchesService from '../services/matches.service';
import LeaderboardService from '../services/leaderboard.service';
import { ILeaderboardC } from '../Interfaces/ILeaderboard';

export default class LeaderboardController implements ILeaderboardC {
  constructor(private service: LeaderboardService) {
  }

  async allPointsHome(req: Request, res: Response): Promise<Response> {
    const allTeamsAndMatches = await this.service.allPointsHome();
    return res.status(200).json(allTeamsAndMatches);
  }

  async allPointsAway(req: Request, res: Response): Promise<Response> {
    const allTeamsAndMatches = await this.service.allPointsAway();
    return res.status(200).json(allTeamsAndMatches);
  }
}
