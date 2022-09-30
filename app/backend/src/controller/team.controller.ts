import { Request, Response } from 'express';
import TeamService from '../services/team.service';
import { ITeamC } from '../Interfaces/ITeam';

export default class TeamController implements ITeamC {
  constructor(private service: TeamService) {
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const allTeams = await this.service.findAll();
    return res.status(200).json(allTeams);
  }

  async findByPk(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const idTeams = await this.service.findByPk(Number(id));
    return res.status(200).json(idTeams);
    // return
  }
}
