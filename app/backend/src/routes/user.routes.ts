import { Router } from 'express';

import UserController from '../controller/users.controller';
import UserService from '../services/user.service';
import validComponents, { middlwareValidation as validationToken,
  validationTeams, validatinProgress } from '../middleware/validComponents';
import TeamService from '../services/team.service';
import TeamController from '../controller/team.controller';
import Matcheservice from '../services/matches.service';
import MatshesController from '../controller/matches.controller';
import LeaderboardService from '../services/leaderboard.service';
import LeaderboardController from '../controller/leaderboard.controller';

const userService = new UserService();
const userController = new UserController(userService);
const userRouter = Router();

const teamService = new TeamService();
const teamController = new TeamController(teamService);

const MatchesService = new Matcheservice();
const MatchesController = new MatshesController(MatchesService);

// const LeaderboardS = LeaderboardService;
// const LeaderboardC = LeaderboardController;

const LeaderboardS = new LeaderboardService();
const LeaderboardC = new LeaderboardController(LeaderboardS);

userRouter.post('/login', validComponents, (req, res) => userController.generationToken(req, res));
userRouter.get('/login/validate', (req, res) => userController.validatToken(req, res));
userRouter.get('/teams', (req, res) => teamController.findAll(req, res));
userRouter.get('/teams/:id', (req, res) => teamController.findByPk(req, res));
userRouter.get('/matches', (req, res) => MatchesController.allMatches(req, res));
userRouter.post(
  '/matches',
  validationToken, // validaçao do token
  validationTeams, // validação dos times
  validatinProgress, // validação inpRogres:true;
  (req, res) => MatchesController.createMatches(req, res),
);
userRouter.patch(
  '/matches/:id/finish',
  validationToken,
  (req, res) => MatchesController.updateMatches(req, res),
);
userRouter.patch(
  '/matches/:id',
  validationToken,
  (req, res) => MatchesController.updateTeams(req, res),
);
userRouter.get(
  '/leaderboard/home',
  (req, res) => LeaderboardC.allPointsHome(req, res),
);

userRouter.get(
  '/leaderboard/away',
  (req, res) => LeaderboardC.allPointsAway(req, res),
);
export default userRouter;
