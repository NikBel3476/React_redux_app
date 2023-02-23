import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, API_USERS } from '../../http/httpRoutes';
import { User } from '../../types/User';

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	tagTypes: ['User'],
	endpoints: builder => ({
		getAllUsers: builder.query<User[], { page: number; limit: number }>({
			query: ({ page, limit = 10 }) => ({
				url: API_USERS,
				method: 'GET',
				params: {
					_page: page,
					_limit: limit
				}
			})
		}),
		getUserById: builder.query<User, number>({
			query: id => ({
				url: `${API_USERS}/${id}`,
				method: 'GET'
			})
		})
	})
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = userApi;
