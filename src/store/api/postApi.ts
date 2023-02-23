import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, POSTS_ROUTE } from '../../router/routes';
import { Post } from '../../types/Post';

export const postApi = createApi({
	reducerPath: 'postApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	tagTypes: ['Post'],
	endpoints: builder => ({
		getAllPosts: builder.query<Post[], { page: number; limit: number }>({
			query: ({ page, limit = 10 }) => ({
				url: POSTS_ROUTE,
				params: {
					_page: page,
					_limit: limit
				}
			})
		}),
		getPostById: builder.query<Post, number>({
			query: id => ({
				url: `${POSTS_ROUTE}/${id}`,
				method: 'GET'
			})
		}),
		getPostsByUserId: builder.query<Post[], number>({
			query: userId => `${POSTS_ROUTE}?userId=${userId}`
		})
	})
});

export const { useGetAllPostsQuery, useGetPostByIdQuery, useGetPostsByUserIdQuery } =
	postApi;
