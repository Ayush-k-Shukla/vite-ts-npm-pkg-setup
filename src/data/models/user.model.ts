export interface UserModel {
    id?: string | null;
    name?: string | null;
    email?: string | null;
}

export const userModelFromJson = (json: any): UserModel => {
    return { ...json };
};

export const USER_MODEL_QUERY = `
    id
    name
    email
`;
