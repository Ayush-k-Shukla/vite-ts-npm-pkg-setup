import { IProps } from '../init';
let mySercrets: IProps = { activationSecret: '', emailId: '' };
export default mySercrets;

// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { userReducer } from '../domain/user_slice';

// const reducers = combineReducers({
//     userStore: userReducer,
// });

// export const reduxStore = configureStore({
//     reducer: reducers,
// });

// export type RootState = ReturnType<typeof reduxStore.getState>;
// export type AppDispatch = typeof reduxStore.dispatch;
