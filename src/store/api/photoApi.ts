import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL, API_PHOTOS } from '../../http/httpRoutes';
import { Photo } from '../../types/Photo';

export const photoApi = createApi({
	reducerPath: 'photoApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	tagTypes: ['Photo'],
	endpoints: builder => ({
		getAllPhotos: builder.query<Photo[], { page: number; limit: number }>({
			query: ({ page = 1, limit = 5 }) => ({
				url: API_PHOTOS,
				method: 'GET',
				params: {
					_page: page,
					_limit: limit
				}
			})
		}),
		getPhotoById: builder.query<Photo, number>({
			query: id => ({
				url: `${API_PHOTOS}/${id}`,
				method: 'GET'
			})
		}),
		getPhotosByAlbumId: builder.query<
			Photo[],
			{ albumId: number; page?: number; limit?: number }
		>({
			query: ({ albumId, page = 1, limit = 5 }) => ({
				url: API_PHOTOS,
				method: 'GET',
				params: {
					albumId,
					_page: page,
					_limit: limit
				}
			})
		})
	})
});

export const { useGetAllPhotosQuery, useGetPhotoByIdQuery, useGetPhotosByAlbumIdQuery } =
	photoApi;
