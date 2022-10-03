import IMatches from '../Interfaces/IMatches';
import Teams from '../database/models/3-Teams.models';
import Matches from '../database/models/2-Matches.model';

export default class Matcheservice implements IMatches {
  db = Matches;

  async allMatches(): Promise<Matches[]> {
    const objectMatches = await this.db.findAll({
      include: [
        {
          model: Teams,
          as: 'teamHome',
          attributes: ['teamName'],
        },
        {
          model: Teams,
          as: 'teamAway',
          attributes: ['teamName'],
        },
      ],
    });
    return objectMatches;
  }

  async filterProgressTeam(string: string): Promise<Matches[]> {
    const stringBoolean = string === 'true';
    const inProgressValues = await this.allMatches();
    const filterProgressTeam = inProgressValues.filter((elemento) => elemento
      .inProgress === stringBoolean);
    return filterProgressTeam;
  }

  async createMatches(object: object): Promise<object> {
    const saveMatches = await this.db.create(object);
    if (!saveMatches) {
      return { false: 'false' };
    }
    const { homeTeam, awayTeam, awayTeamGoals, homeTeamGoals, inProgress } = saveMatches;
    const filteMatches = await this.db.findAll({
      where: { homeTeam, awayTeam, awayTeamGoals, homeTeamGoals, inProgress },
    });
    return filteMatches;
  }
}
