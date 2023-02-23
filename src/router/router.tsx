import React from 'react';
import {
	ALBUM_ROUTE,
	POST_ROUTE,
	POSTS_ROUTE,
	ROOT_ROUTE,
	USER_ROUTE,
	USERS_ROUTE
} from './routes';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import PostsPage from '../pages/PostsPage';
import PostPage from '../pages/PostPage';
import UsersPage from '../pages/UsersPage';
import UserPage from '../pages/UserPage';
import NotFoundPage from '../pages/NotFoundPage';
import AlbumPage from '../pages/AlbumPage';

export const router = createBrowserRouter(
	[
		{
			path: ROOT_ROUTE,
			element: <MainPage />,
			errorElement: <NotFoundPage />
		},
		{
			path: POSTS_ROUTE,
			element: <PostsPage />
		},
		{
			path: POST_ROUTE,
			element: <PostPage />
		},
		{
			path: USERS_ROUTE,
			element: <UsersPage />
		},
		{
			path: USER_ROUTE,
			element: <UserPage />
		},
		{
			path: ALBUM_ROUTE,
			element: <AlbumPage />
		}
	],
	{
		basename: '/React_redux_app'
	}
);
