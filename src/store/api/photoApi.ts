import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_PHOTOS, API_URL } from '../../http/httpRoutes';
import { Photo } from '../../types/Photo';
import { ListResponse } from '../ListResponse';

export const photoApi = createApi({
	reducerPath: 'photoApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	tagTypes: ['Photos'],
	endpoints: builder => ({
		getAllPhotos: builder.query<ListResponse<Photo>, { page: number; limit: number }>({
			query: ({ page = 1, limit = 5 }) => ({
				url: API_PHOTOS,
				method: 'GET',
				params: {
					_page: page,
					_limit: limit
				}
			}),
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			transformResponse: (response: Photo[], meta, arg) => {
				const totalCountHeaderValue = meta?.response?.headers.get('x-total-count');
				const totalCount =
					totalCountHeaderValue != null ? Number(totalCountHeaderValue) : 0;
				return {
					totalCount,
					totalPages: Math.ceil(totalCount / arg.limit),
					data: response
				};
			},
			providesTags: () => ['Photos'],
			merge: (currentCacheData, responseData) => {
				currentCacheData.data.push(...responseData.data);
				currentCacheData.totalCount = responseData.totalCount;
				currentCacheData.totalPages = responseData.totalPages;
			},
			forceRefetch: ({ currentArg, previousArg }) => {
				return currentArg !== previousArg;
			}
		}),
		getPhotoById: builder.query<Photo, number>({
			query: id => ({
				url: `${API_PHOTOS}/${id}`,
				method: 'GET'
			})
		}),
		getPhotosByAlbumId: builder.query<
			ListResponse<Photo> & { albumId: number },
			{ albumId: number; page: number; limit: number }
		>({
			query: ({ albumId, page = 1, limit = 5 }) => ({
				url: API_PHOTOS,
				method: 'GET',
				params: {
					albumId,
					_page: page,
					_limit: limit
				}
			}),
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			transformResponse: (response: Photo[], meta, arg) => {
				const totalCountHeaderValue = meta?.response?.headers.get('x-total-count');
				const totalCount =
					totalCountHeaderValue != null ? Number(totalCountHeaderValue) : 0;
				return {
					albumId: arg.albumId,
					totalCount,
					totalPages: Math.ceil(totalCount / arg.limit),
					data: response
				};
			},
			merge: (currentCacheData, responseData) => {
				currentCacheData.data =
					currentCacheData.albumId === responseData.albumId
						? [...currentCacheData.data, ...responseData.data]
						: responseData.data;
				currentCacheData.albumId = responseData.albumId;
				currentCacheData.totalCount = responseData.totalCount;
				currentCacheData.totalPages = responseData.totalPages;
			},
			forceRefetch: ({ currentArg, previousArg }) => {
				return currentArg !== previousArg;
			}
		})
	})
});

export const { useGetAllPhotosQuery, useGetPhotoByIdQuery, useGetPhotosByAlbumIdQuery } =
	photoApi;
