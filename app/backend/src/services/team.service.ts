import TeamsModel from '../database/models/3-Teams.models';
import ITeam from '../Interfaces/ITeam';

export default class TeamService implements ITeam {
  db = TeamsModel;

  async findAll(): Promise<object> {
    const objectTeam = await this.db.findAll();
    return objectTeam;
  }

  async findByPk(id: number): Promise<object | null> {
    const idTeam = await this.db.findByPk(id);
    return idTeam;
  }
}
