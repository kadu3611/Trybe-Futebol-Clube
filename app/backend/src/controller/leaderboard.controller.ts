import { Request, Response } from 'express';
// import MatchesService from '../services/matches.service';
import LeaderboardService from '../services/leaderboard.service';
// import { ILeaderboardC } from '../Interfaces/ILeaderboard';
// implements ILeaderboardC
export default class LeaderboardController {
  constructor(private service: LeaderboardService) {
  }

  static async allPoints(req: Request, res: Response): Promise<Response> {
    const allTeamsAndMatches = await LeaderboardService.returnFunction();
    return res.status(200).json(allTeamsAndMatches);
  }
}
