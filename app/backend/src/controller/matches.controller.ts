import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';
import { IMatchesC } from '../Interfaces/IMatches';

export default class MatshesController implements IMatchesC {
  constructor(private service: MatchesService) {
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const allMatches = await this.service.findAll();
    return res.status(200).json(allMatches);
  }

//   async findByPk(req: Request, res: Response): Promise<Response> {
//     const { id } = req.params;
//     const idMatches = await this.service.findByPk(Number(id));
//     return res.status(200).json(idMatches);
//     // return
//   }
}
