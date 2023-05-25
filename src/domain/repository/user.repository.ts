import { UserEntity } from '../entity/user.entity';

export default interface UserRepository {
    getUsers(): Promise<UserEntity[]>;
}
