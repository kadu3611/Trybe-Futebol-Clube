import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';
import TeamService from '../services/team.service';

export default async function validComponents(req: Request, res: Response, next: NextFunction) {
  const { email, password } = Object(req.body);
  //   const regex = /\S+@\S+\.\S+/;
  const { email: userEmail } = await Object(new UserService().findOne(email));
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!userEmail) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  next();
}

async function validationToken(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = Object(req.headers);
    await new UserService().validatToken(authorization);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}

async function validationTeams(req: Request, res: Response, next: NextFunction) {
  const { homeTeam, awayTeam } = Object(req.body);

  const allTeams = await new TeamService().findAll();
  const checkTeamshome = allTeams.some((element) => element.id === homeTeam);
  const checkTeamsAways = allTeams.some((element) => element.id === awayTeam);

  if (!checkTeamshome === checkTeamsAways) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
  if (homeTeam === awayTeam) {
    return res.status(401)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }
  next();
}

async function validatinProgress(req: Request, res: Response, next: NextFunction) {
  const { inProgress } = Object(req.body);
  if (!inProgress) {
    return res.status(401)
      .json({ message: 'Not inProgress false, plis' });
  }
  next();
}

export {
  validationToken as middlwareValidation,
  validationTeams,
  validatinProgress,
};
