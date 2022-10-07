import Matches from '../database/models/2-Matches.model';
import Matcheservice from './matches.service';
import Teams from '../database/models/3-Teams.models';
import { allGoals, allTotal, efficiencyFunction, allTotalPoints,
  totalGams, allpointsSort } from './utils.service';
import { IArrayMatch } from '../Interfaces/ILeaderboard';

export default class LeaderboardService {
  db = Teams;

  async allTeams(): Promise<Teams[]> {
    const allTeams = await this.db.findAll();
    return allTeams;
  }

  static allMatches = new Matcheservice().allMatches();

  async dbTeamsAll() {
    const db = await this.db.findAll({
      include: [{
        model: Matches,
        as: 'homeMatches',
      },
      {
        model: Matches,
        as: 'awayMatches',
      },
      ],
    });
    return db;
  }

  // Array<{homeTeam:number, homeTeamGoals:number, awayTeamGoals:number}>
  async allPoints():Promise<IArrayMatch[]> {
    const dbTeamsAll = await this.dbTeamsAll();
    const points:IArrayMatch[] = dbTeamsAll.map((elemento) => ({
      name: elemento.teamName,
      totalPoints: allTotalPoints(elemento.homeMatches).totalP,
      totalGames: totalGams(elemento.homeMatches),
      totalVictories: allTotal(elemento.homeMatches).totalV,
      totalDraws: allTotal(elemento.homeMatches).totalD,
      totalLosses: allTotal(elemento.homeMatches).totalL,
      goalsFavor: allGoals(elemento.homeMatches).goalsFavor,
      goalsOwn: allGoals(elemento.homeMatches).goalsOwn,
      goalsBalance: allGoals(elemento.homeMatches).goalsB,
      efficiency: efficiencyFunction(elemento.homeMatches),
    }));
    const pointsSort = allpointsSort(points);
    return pointsSort;
  }

  static async returnFunction() {
    // await this();
    // return new LeaderboardService().dbTeamsAll();
    return new LeaderboardService().allPoints();
  }
}
