import { GraphQLClient } from 'graphql-request';
import { injectable } from 'inversify';
import { userEntityFromModel } from '../../../domain/entity/user.entity';
import { USER_MODEL_QUERY, UserModel } from '../../models/user.model';
import UserDatasource from '../interface/user.datasource';
@injectable()
export class UserDatasourceImpl implements UserDatasource {
    private DUMMY_GRAPHQL_ENDPOINT = `https://api.mocki.io/v2/c4d7a195/graphql`;
    private client = new GraphQLClient(this.DUMMY_GRAPHQL_ENDPOINT);

    async getUsers(): Promise<UserModel[]> {
        const QUERY = `
            query users {
                users {
                    ${USER_MODEL_QUERY}
                }
            }
        `;
        try {
            const res = await this.client.request<{ users: UserModel[] }>(
                QUERY,
            );
            const users = res.users;
            console.log(`int dsimpl: `, users);

            return users
                ? users?.map((user: any) => userEntityFromModel(user))
                : [];
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
