// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { di } from '../core/injection_container';
// import { UserRepositoryImpl } from '../data/repository_impl/user.repo_impl';
// import { UserEntity } from './entity/user.entity';

// interface IAuthSliceState {
//     users: UserEntity[];
// }

// const initialState: IAuthSliceState = {
//     users: [],
// };

// export const getUsers = createAsyncThunk('userSlice/getUsers', async () => {
//     try {
//         return await di.get(UserRepositoryImpl).getUsers();
//     } catch (error) {
//         throw error;
//     }
// });

// export const userSlice = createSlice({
//     name: 'userSlice',
//     initialState,
//     reducers: {},
//     extraReducers(builder) {
//         builder
//             // getUsers
//             .addCase(getUsers.pending, (state) => {})
//             .addCase(getUsers.fulfilled, (state, action: any) => {
//                 console.log(action);
//                 state.users = action.payload;
//             })
//             .addCase(getUsers.rejected, (state, payload: any) => {});
//     },
// });

// export const userReducer = userSlice.reducer;

export {};
