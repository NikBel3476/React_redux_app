import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ALBUMS_ROUTE, API_URL } from '../../router/routes';
import { Album } from '../../types/Album';

export const albumApi = createApi({
	reducerPath: 'albumApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	tagTypes: ['Album'],
	endpoints: builder => ({
		getAllAlbums: builder.query<Album[], { page: number; limit: number }>({
			query: ({ page, limit = 10 }) => ({
				url: ALBUMS_ROUTE,
				method: 'GET',
				params: {
					_page: page,
					_limit: limit
				}
			})
		}),
		getAlbumById: builder.query<Album, number>({
			query: id => ({
				url: `${ALBUMS_ROUTE}/${id}`,
				method: 'GET'
			})
		}),
		getAlbumsByUserId: builder.query<
			Album[],
			{ userId: number; page?: number; limit?: number }
		>({
			query: ({ userId, page = 1, limit = 5 }) => ({
				url: ALBUMS_ROUTE,
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
