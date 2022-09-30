// import UserModel from '../database/models/1-User-models';

interface User {
  generationToken(object: object): Promise<string | null>,
  findOne(email: string): Promise<object>,
  validatToken(token: string): Promise<object>,
}
export default User;
