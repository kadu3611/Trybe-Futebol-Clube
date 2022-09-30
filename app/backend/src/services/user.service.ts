import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import UserModel from '../database/models/1-User.models';
import IUser from '../Interfaces/IUser';

const { JWT_SECRET } = Object(process.env);

export default class UserService implements IUser {
  db = UserModel;

  async findOne(email: string): Promise<object> {
    const objectLogin = Object(await this.db.findOne({ where: { email } }));
    return objectLogin;
  }

  async generationToken(object: object): Promise<string | null> {
    const { email, password } = Object(object);
    const { password: userPassword } = Object(await this.findOne(email));
    const verify = bcrypt.compareSync(password, userPassword);
    if (verify) {
      const jwtConfig = Object({
        expiresIn: '1d', algorithm: 'HS256',
      });
      const token = jwt.sign({ email }, JWT_SECRET, jwtConfig);
      return token;
    }
    return null;
  }

  async validatToken(token: string): Promise<object> {
    const { email } = Object(jwt.verify(token, JWT_SECRET));
    const { role } = Object(await this.findOne(email));
    return role;
  }
}
