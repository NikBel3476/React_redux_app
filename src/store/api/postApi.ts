import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, API_POSTS } from '../../http/httpRoutes';
import { Post } from '../../types/Post';
import { ListResponse } from '../ListResponse';

export const postApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	tagTypes: ['Posts'],
	endpoints: builder => ({
		getAllPosts: builder.query<ListResponse<Post>, { page: number; limit: number }>({
			query: ({ page = 1, limit = 10 }) => ({
				url: API_POSTS,
				params: {
					_page: page,
					_limit: limit
				}
			}),
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			transformResponse: (response: Post[], meta, arg) => {
				const totalCountHeaderValue = meta?.response?.headers.get('x-total-count');
				const totalCount =
					totalCountHeaderValue != null ? Number(totalCountHeaderValue) : 0;
				return {
					totalCount,
					totalPages: Math.ceil(totalCount / arg.limit),
					data: response
				};
			},
			providesTags: () => ['Posts'],
			merge: (currentCacheData, responseData) => {
				currentCacheData.data.push(...responseData.data);
				currentCacheData.totalCount = responseData.totalCount;
				currentCacheData.totalPages = responseData.totalPages;
			},
			forceRefetch: ({ currentArg, previousArg }) => {
				return (
					currentArg?.page !== previousArg?.page ||
					currentArg?.limit !== previousArg?.limit
				);
			}
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
