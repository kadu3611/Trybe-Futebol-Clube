// // import sequelize = require('sequelize');
// import ILeaderboard from '../Interfaces/ILeaderboard';
// import Teams from '../database/models/3-Teams.models';
// import Matches from '../database/models/2-Matches.model';
// import TeamService from './team.service';
// import Matcheservice from './matches.service';

// export default class LeaderboardService implements ILeaderboard {
//   db = Matches;
//   name:string;
//   totalPoints:number;
//   totalGames = 0;
//   totalVictories:number;
//   totalDraws:number;
//   totalLosses:number;
//   goalsFavor = 0;
//   goalsOwn = 0;
//   goalsBalance:number;
//   efficiency:number;

//   static newFunction(): object {
//     const allDates = {
//       name: '',
//       totalPoints: 0,
//       totalGames: 0,
//       totalVictories: 0,
//       totalDraws: 0,
//       totalLosses: 0,
//       goalsFavor: 0,
//       goalsOwn: 0,
//       goalsBalance: 0,
//       efficiency: 0,
//     };
//     return allDates;
//   }

//   async allPoints(): Promise<object> {
//     const allMatches = await new Matcheservice().allMatches();
//     const allTeams = await new TeamService().findAll();
//     const { efficiency } = this;
//     const allGames = allTeams.map(async (elemento) => {
//       await this.db.findAll({
//         where: { id: elemento.id },
//       });
//       const
//     });
//     // let name = '';
//     // const findAllTeams = allTeams.map((teams) => {
//     //   let totalGames = 0;
//     //   name = teams.teamName;
//     //   const [allPointsMatches] = allMatches.map((points) => {
//     //     const { efficiency } = this;
//     //     if (points.homeTeam === teams.id) {
//     //       tGames += 1;
//     //       console.log(totalGames, 'Total');
//     //     }
//     //     const all = {
//     //       name,
//     //       totalGames: tGames,
//     //     };
//     //     return all;
//     //   });
//     //   return allPointsMatches;
//     // });
//     return findAllTeams;
//   }

//   //   const allGames = {
//   //     name: teams.teamName,
//   //     totalPoints: (numberWins * 3) + numberDraws,
//   //     totalVictories: numberWins,
//   //     totalDraws: numberDraws,
//   //     totalLosses: numberFails,
//   //     goalsFavor: goalsHome,
//   //     goalsOwn: goalsAway,
//   //     goalsBalance: (goalsHome + goalsAway) / 2,
//   //     efficiency: (numberWins * 100) / numberGames,
//   //   };

//   //     "name": "Santos",
//   //     "totalPoints": 9,
//   //     "totalGames": 3,
//   //     "totalVictories": 3,
//   //     "totalDraws": 0,
//   //     "totalLosses": 0,
//   //     "goalsFavor": 9,
//   //     "goalsOwn": 3,
//   //     "goalsBalance": 6,
//   //     "efficiency": "100.00"
//   //   },
// //     return objectMatches;
// //   }
// }
