import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import UserModel from '../database/models/1-User-models';
import IUser from '../Interfaces/UsersService';

export default class UserService implements IUser {
  db = UserModel;

  async generationToken(object: object): Promise<string | null> {
    const { email, password } = Object(object);
    const { password: userPassword } = Object(await this.db.findOne({ where: { email } }));
    const verify = bcrypt.compareSync(password, userPassword);
    if (verify) {
      const { JWT_SECRET } = Object(process.env);
      const jwtConfig = Object({
        expiresIn: '1d', algorithm: 'HS256',
      });
      const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);
      return token;
    }
    return null;
  }
}
