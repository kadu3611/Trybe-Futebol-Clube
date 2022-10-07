import { IArrayMatch, IGoals, ITotal } from '../Interfaces/ILeaderboard';
import IMatchesTeam from '../Interfaces/IMatchesTeams';
// import Matches from '../database/models/2-Matches.model';

function pattern(params:number):number {
  let total = 0;
  total += params;
  return total;
}

function totalVictories(homeTeamGoals:number, awayTeamGoals: number):number {
  let total = 0;
  if (homeTeamGoals > awayTeamGoals) {
    total += 1;
  }
  return total;
}
// totalLosses
function totalLosses(homeTeamGoals:number, awayTeamGoals: number):number {
  let total = 0;
  if (homeTeamGoals < awayTeamGoals) {
    total += 1;
  }
  return total;
}
// // totalDraws

function totalDraws(homeTeamGoals:number, awayTeamGoals: number):number {
  let total = 0;
  if (homeTeamGoals === awayTeamGoals) {
    total += 1;
  }
  return total;
}
function totalPoints(
  totalVic: number,
  totalLos: number,
  totalDra: number,
):number {
  let total = 0;
  const totalV = totalVic;
  const totalL = totalLos;
  const totalD = totalDra;
  total = ((totalV - totalL) * 3) + totalD;
  if (total < 0) {
    total = 0;
  }
  return total;
}
// // goalsBalance

function goalsBalance(goalHome:number, goalsOwn: number):number {
  let total = 0;
  const goalH = goalHome;
  const goalW = goalsOwn;
  total = goalH - goalW;
  return total;
}

function efficiency(totalGam: number, totalPon: number):number {
  let total = 0;
  const totalG = totalGam;
  const totalP = totalPon;
  total = ((100 * totalP) / (totalG * 3));
  return total;
}

function allGoals(matches:IMatchesTeam[]): IGoals {
  let goalsFavor = 0;
  let goalsOwn = 0;
  let goalsB = 0;
  matches.forEach((item) => {
    if (!item.inProgress) {
      const { homeTeamGoals, awayTeamGoals } = item;
      goalsFavor += pattern(homeTeamGoals);
      goalsOwn += pattern(awayTeamGoals);
      goalsB += goalsBalance(pattern(homeTeamGoals), pattern(awayTeamGoals));
    }
  });
  return { goalsFavor, goalsOwn, goalsB };
}

function allTotal(matches:IMatchesTeam[]): ITotal {
  let totalV = 0;
  let totalL = 0;
  let totalD = 0;
  matches.forEach((item) => {
    if (!item.inProgress) {
      const { homeTeamGoals, awayTeamGoals } = item;
      totalV += totalVictories(homeTeamGoals, awayTeamGoals);
      totalL += totalLosses(homeTeamGoals, awayTeamGoals);
      totalD += totalDraws(homeTeamGoals, awayTeamGoals);
    }
  });
  return { totalV, totalL, totalD };
}
function allTotalPoints(matches:IMatchesTeam[]): { totalP: number; } {
  let totalP = 0;
  matches.forEach((item) => {
    if (!item.inProgress) {
      const { homeTeamGoals, awayTeamGoals } = item;
      totalP += totalPoints(
        totalVictories(homeTeamGoals, awayTeamGoals),
        totalLosses(homeTeamGoals, awayTeamGoals),
        totalDraws(homeTeamGoals, awayTeamGoals),
      );
    }
  });
  return { totalP };
}

function totalGams(matches:IMatchesTeam[]): number {
  let totalG = 0;
  matches.forEach((item) => {
    if (!item.inProgress) {
      totalG += 1;
    }
  });
  return totalG;
}

function efficiencyFunction(matches:IMatchesTeam[]): string {
  let totalB = 0;
  matches.forEach((item) => {
    if (!item.inProgress) {
      const { homeTeamGoals, awayTeamGoals } = item;
      totalB += (efficiency(totalGams(matches), totalPoints(
        totalVictories(homeTeamGoals, awayTeamGoals),
        totalLosses(homeTeamGoals, awayTeamGoals),
        totalDraws(homeTeamGoals, awayTeamGoals),
      ))
      );
    }
  });
  const total = totalB.toFixed(2);
  return total;
}

function allpointsSort(points: IArrayMatch[]):IArrayMatch[] {
  const mapPoints = points.sort((a, b) => (b.totalPoints - a.totalPoints || b.totalVictories - a
    .totalVictories || b.goalsBalance - a.goalsBalance || b.goalsFavor - a
    .goalsFavor || b.goalsOwn - a.goalsOwn));
  return mapPoints;
}
export {
  allTotal,
  allGoals,
  efficiencyFunction,
  allTotalPoints,
  totalGams,
  allpointsSort,
};
