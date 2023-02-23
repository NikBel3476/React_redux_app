import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, API_POSTS } from '../../http/httpRoutes';
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
				url: API_POSTS,
				params: {
					_page: page,
					_limit: limit
				}
			})
		}),
		getPostById: builder.query<Post, number>({
			query: id => ({
				url: `${API_POSTS}/${id}`,
				method: 'GET'
			})
		}),
		getPostsByUserId: builder.query<Post[], number>({
			query: userId => `${API_POSTS}?userId=${userId}`
		})
	})
});

export const { useGetAllPostsQuery, useGetPostByIdQuery, useGetPostsByUserIdQuery } =
	postApi;
