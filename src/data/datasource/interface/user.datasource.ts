import { UserModel } from '../../models/user.model';

export default interface UserDatasource {
    getUsers(): Promise<UserModel[]>;
}
