import { Router } from 'express';

import UserController from '../controller/users.controller';
import UserService from '../services/user.service';
import validComponents from '../middleware/validComponents';
import TeamService from '../services/team.service';
import TeamController from '../controller/team.controller';
import Matcheservice from '../services/matches.service';
import MatshesController from '../controller/matches.controller';

const userService = new UserService();
const userController = new UserController(userService);
const userRouter = Router();

const teamService = new TeamService();
const teamController = new TeamController(teamService);

const MatchesService = new Matcheservice();
const MatchesController = new MatshesController(MatchesService);

userRouter.post('/login', validComponents, (req, res) => userController.generationToken(req, res));
userRouter.get('/login/validate', (req, res) => userController.validatToken(req, res));
userRouter.get('/teams', (req, res) => teamController.findAll(req, res));
userRouter.get('/teams/:id', (req, res) => teamController.findByPk(req, res));
userRouter.get('/matches', (req, res) => MatchesController.findAll(req, res));
userRouter.post('/matches', (req, res) => MatchesController.createMatches(req, res));

export default userRouter;
