// import UserModel from '../database/models/1-User-models';

interface User {
  generationToken(object: object): Promise<string | null>,
}
export default User;
