import MatchesModel from '../database/models/2-Matches.model';
import IMatches from '../Interfaces/IMatches';

export default class Matcheservice implements IMatches {
  db = MatchesModel;

  async findAll(): Promise<object> {
    const objectMatches = await this.db.findAll();
    return objectMatches;
  }
}
