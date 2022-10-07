import Matches from '../database/models/2-Matches.model';
import Matcheservice from './matches.service';
import Teams from '../database/models/3-Teams.models';
import { allGoals, allTotal, efficiencyFunction, allTotalPoints,
  totalGams, allpointsSort } from './utilsHome.service';
import { IArrayMatch } from '../Interfaces/ILeaderboard';
import { allTotalA, allGoalsA, efficiencyFunctionA, allTotalPointsA,
  totalGamsA, allpointsSortA } from './utilsAways.service';

export default class LeaderboardService {
  db = Teams;

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

  async allPointsHome():Promise<IArrayMatch[]> {
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

  async allPointsAway():Promise<IArrayMatch[]> {
    const dbTeamsAll = await this.dbTeamsAll();
    const points:IArrayMatch[] = dbTeamsAll.map((elemento) => ({
      name: elemento.teamName,
      totalPoints: allTotalPointsA(elemento.awayMatches).totalP,
      totalGames: totalGamsA(elemento.awayMatches),
      totalVictories: allTotalA(elemento.awayMatches).totalV,
      totalDraws: allTotalA(elemento.awayMatches).totalD,
      totalLosses: allTotalA(elemento.awayMatches).totalL,
      goalsFavor: allGoalsA(elemento.awayMatches).goalsFavor,
      goalsOwn: allGoalsA(elemento.awayMatches).goalsOwn,
      goalsBalance: allGoalsA(elemento.awayMatches).goalsB,
      efficiency: efficiencyFunctionA(elemento.awayMatches),
    }));
    const pointsSort = allpointsSortA(points);
    return pointsSort;
  }
}
