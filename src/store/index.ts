import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postApi } from './api/postApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import postReducer from './slices/PostSlice';
import { userApi } from './api/userApi';
import { albumApi } from './api/albumApi';
import { photoApi } from './api/photoApi';
import { commentApi } from './api/commentApi';

const rootReducer = combineReducers({
	postReducer,
	[postApi.reducerPath]: postApi.reducer,
	[userApi.reducerPath]: userApi.reducer,
	[albumApi.reducerPath]: albumApi.reducer,
	[photoApi.reducerPath]: photoApi.reducer,
	[commentApi.reducerPath]: commentApi.reducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			postApi.middleware,
			userApi.middleware,
			albumApi.middleware,
			photoApi.middleware,
			commentApi.middleware
		)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
