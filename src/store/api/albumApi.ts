import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, API_ALBUMS } from '../../http/httpRoutes';
import { Album } from '../../types/Album';

export const albumApi = createApi({
	reducerPath: 'albumApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	tagTypes: ['Album'],
	endpoints: builder => ({
		getAllAlbums: builder.query<Album[], { page: number; limit: number }>({
			query: ({ page = 1, limit = 10 }) => ({
				url: API_ALBUMS,
				method: 'GET',
				params: {
					_page: page,
					_limit: limit
				}
			})
		}),
		getAlbumById: builder.query<Album, number>({
			query: id => ({
				url: `${API_ALBUMS}/${id}`,
				method: 'GET'
			})
		}),
		getAlbumsByUserId: builder.query<
			Album[],
			{ userId: number; page?: number; limit?: number }
		>({
			query: ({ userId, page = 1, limit = 5 }) => ({
				url: API_ALBUMS,
				method: 'GET',
				params: {
					userId,
					_page: page,
					_limit: limit
				}
			})
		})
	})
});

export const { useGetAllAlbumsQuery, useGetAlbumByIdQuery, useGetAlbumsByUserIdQuery } =
	albumApi;
