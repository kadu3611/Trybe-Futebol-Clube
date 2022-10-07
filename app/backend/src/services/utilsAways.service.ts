import { IArrayMatch, IGoals, ITotal } from '../Interfaces/ILeaderboard';
import IMatchesTeam from '../Interfaces/IMatchesTeams';
// import Matches from '../database/models/2-Matches.model';

function patternA(params:number):number {
  let total = 0;
  total += params;
  return total;
}

function totalVictoriesA(homeTeamGoals:number, awayTeamGoals: number):number {
  let total = 0;
  if (awayTeamGoals > homeTeamGoals) {
    total += 1;
  }
  return total;
}
// totalLosses
function totalLossesA(homeTeamGoals:number, awayTeamGoals: number):number {
  let total = 0;
  if (awayTeamGoals < homeTeamGoals) {
    total += 1;
  }
  return total;
}
// // totalDraws

function totalDrawsA(homeTeamGoals:number, awayTeamGoals: number):number {
  let total = 0;
  if (homeTeamGoals === awayTeamGoals) {
    total += 1;
  }
  return total;
}
function totalPointsA(
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

function goalsBalanceA(goalHome:number, goalsOwn: number):number {
  let total = 0;
  const goalH = goalHome;
  const goalW = goalsOwn;
  total = goalW - goalH;
  return total;
}

function efficiencyA(totalGam: number, totalPon: number):number {
  let total = 0;
  const totalG = totalGam;
  const totalP = totalPon;
  total = ((100 * totalP) / (totalG * 3));
  return total;
}

function allGoalsA(matches:IMatchesTeam[]): IGoals {
  let goalsFavor = 0;
  let goalsOwn = 0;
  let goalsB = 0;
  matches.forEach((item) => {
    if (!item.inProgress) {
      const { homeTeamGoals, awayTeamGoals } = item;
      goalsFavor += patternA(awayTeamGoals);
      goalsOwn += patternA(homeTeamGoals);
      goalsB += goalsBalanceA(patternA(homeTeamGoals), patternA(awayTeamGoals));
    }
  });
  return { goalsFavor, goalsOwn, goalsB };
}

function allTotalA(matches:IMatchesTeam[]): ITotal {
  let totalV = 0;
  let totalL = 0;
  let totalD = 0;
  matches.forEach((item) => {
    if (!item.inProgress) {
      const { homeTeamGoals, awayTeamGoals } = item;
      totalV += totalVictoriesA(homeTeamGoals, awayTeamGoals);
      totalL += totalLossesA(homeTeamGoals, awayTeamGoals);
      totalD += totalDrawsA(homeTeamGoals, awayTeamGoals);
    }
  });
  return { totalV, totalL, totalD };
}
function allTotalPointsA(matches:IMatchesTeam[]): { totalP: number; } {
  let totalP = 0;
  matches.forEach((item) => {
    if (!item.inProgress) {
      const { homeTeamGoals, awayTeamGoals } = item;
      totalP += totalPointsA(
        totalVictoriesA(homeTeamGoals, awayTeamGoals),
        totalLossesA(homeTeamGoals, awayTeamGoals),
        totalDrawsA(homeTeamGoals, awayTeamGoals),
      );
    }
  });
  return { totalP };
}

function totalGamsA(matches:IMatchesTeam[]): number {
  let totalG = 0;
  matches.forEach((item) => {
    if (!item.inProgress) {
      totalG += 1;
    }
  });
  return totalG;
}

function efficiencyFunctionA(matches:IMatchesTeam[]): string {
  let totalB = 0;
  matches.forEach((item) => {
    if (!item.inProgress) {
      const { homeTeamGoals, awayTeamGoals } = item;
      totalB += (efficiencyA(totalGamsA(matches), totalPointsA(
        totalVictoriesA(homeTeamGoals, awayTeamGoals),
        totalLossesA(homeTeamGoals, awayTeamGoals),
        totalDrawsA(homeTeamGoals, awayTeamGoals),
      ))
      );
    }
  });
  const total = totalB.toFixed(2);
  return total;
}

function allpointsSortA(points: IArrayMatch[]):IArrayMatch[] {
  const mapPoints = points.sort((a, b) => (b.totalPoints - a.totalPoints || b.totalVictories - a
    .totalVictories || b.goalsBalance - a.goalsBalance || b.goalsFavor - a
    .goalsFavor || b.goalsOwn - a.goalsOwn));
  return mapPoints;
}
export {
  allTotalA,
  allGoalsA,
  efficiencyFunctionA,
  allTotalPointsA,
  totalGamsA,
  allpointsSortA,
};
