import { UserModel } from '../../data/models/user.model';

export interface UserEntity {
    id?: string | null;
    name?: string | null;
    email?: string | null;
}

export const userEntityFromModel = (model: UserModel): UserEntity => {
    return { ...model };
};
