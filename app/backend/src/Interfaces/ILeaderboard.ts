// import UserModel from '../database/models/1-User-models';
// import Teams from '../database/models/3-Teams.models';
import { Request, Response } from 'express';

interface IAllPoints{
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string | boolean;
}

interface IPoints{
  goalsFavor: number;
  goalsOwn: number;
  totalV: number;
  totalL: number;
  totalD: number;
  totalP: number;
}

interface IPointsTeams{

  name: string;
  totalGames: number;
  totalVictories: number;
  goalsFavor: number;
  goalsOwn: number;
  totalDraws: number;

}

interface IMatchesPointsHome{

  name: string;
  totalGames: number;
  totalVictories: number;
  goalsFavor: number;
  goalsOwn: number;
  totalDraws: number;
  goalsBalance: number;
  efficiency: number;

}

interface IMatchesDb{

  id: number;
  teamName: string;
  homeMatches: {
    homeTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  }

}

interface IArrayMatch{
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
}

interface ITotal {
  totalV: number;
  totalL: number;
  totalD: number;
}

interface IGoals {
  goalsFavor: number;
  goalsOwn: number;
  goalsB: number;
}

interface ILeaderboardC{
  allPointsHome(req: Request, res: Response): Promise<Response>,
}

export { IGoals, IAllPoints, IPointsTeams, IMatchesPointsHome,
  IMatchesDb, IArrayMatch, IPoints, ITotal, ILeaderboardC };
