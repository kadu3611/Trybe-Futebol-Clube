// import { Request, Response } from 'express';
// // import MatchesService from '../services/matches.service';
// import LeaderboardService from '../services/leaderboard.service';
// import { ILeaderboardC } from '../Interfaces/ILeaderboard';

// export default class LeaderboardController implements ILeaderboardC {
//   constructor(private service: LeaderboardService) {
//   }

//   async allPoints(req: Request, res: Response): Promise<Response> {
//     const allTeamsAndMatches = await this.service.allPoints();
//     return res.status(200).json(allTeamsAndMatches);
//   }
// }
