import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, API_POSTS } from '../http/httpRoutes';

export const fetchPost = createAsyncThunk(
	'post/fetchById',
	async (postId: number, thunkAPI) => {
		try {
			const response = await fetch(`${API_URL}${API_POSTS}/${postId}`);
			return await response.json();
		} catch (e) {
			return thunkAPI.rejectWithValue('Error on post loading');
		}
	}
);
