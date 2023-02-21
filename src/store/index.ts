import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { postApi } from "./api/postApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import postReducer from './slices/PostSlice';

const rootReducer = combineReducers({
	postReducer,
	[postApi.reducerPath]: postApi.reducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(postApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
