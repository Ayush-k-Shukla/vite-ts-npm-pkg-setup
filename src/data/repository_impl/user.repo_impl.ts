import { inject, injectable } from 'inversify';
import {
    UserEntity,
    userEntityFromModel,
} from '../../domain/entity/user.entity';
import UserRepository from '../../domain/repository/user.repository';
import { UserDatasourceImpl } from '../datasource/remote/user.datasource.impl';

@injectable()
export class UserRepositoryImpl implements UserRepository {
    private userDataSourceImpl: UserDatasourceImpl;

    constructor(
        @inject(UserDatasourceImpl)
        _userDataSourceImpl: UserDatasourceImpl,
    ) {
        this.userDataSourceImpl = _userDataSourceImpl;
    }

    async getUsers(): Promise<UserEntity[]> {
        try {
            const response = await this.userDataSourceImpl.getUsers();
            console.log(response);
            return response
                ? response.map((val) => userEntityFromModel(val))
                : [];
        } catch (error) {
            throw error;
        }
    }
}
