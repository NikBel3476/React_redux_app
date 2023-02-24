import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_COMMENTS, API_URL } from '../../http/httpRoutes';
import { Comment } from '../../types/Comment';

export const commentApi = createApi({
	reducerPath: 'commentApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	tagTypes: ['Comment'],
	endpoints: builder => ({
		getAllComments: builder.query<Comment[], { page?: number; limit?: number }>({
			query: ({ page = 1, limit = 10 }) => ({
				url: API_COMMENTS,
				method: 'GET',
				params: {
					_page: page,
					_limit: limit
				}
			})
		}),
		getCommentById: builder.query<Comment, number>({
			query: id => ({
				url: `${API_COMMENTS}/${id}`,
				method: 'GET'
			})
		}),
		getCommentsByPostId: builder.query<
			Comment[],
			{ postId: number; page?: number; limit?: number }
		>({
			query: ({ postId, page = 1, limit = 10 }) => ({
				url: API_COMMENTS,
				method: 'GET',
				params: {
					postId,
					_page: page,
					_limit: limit
				}
			})
		})
	})
});

export const {
	useGetAllCommentsQuery,
	useGetCommentByIdQuery,
	useGetCommentsByPostIdQuery
} = commentApi;
