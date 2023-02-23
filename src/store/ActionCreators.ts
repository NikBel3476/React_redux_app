import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, POSTS_ROUTE } from '../router/routes';

export const fetchPost = createAsyncThunk(
	'post/fetchById',
	async (postId: number, thunkAPI) => {
		try {
			const response = await fetch(`${API_URL}${POSTS_ROUTE}/${postId}`);
			return await response.json();
		} catch (e) {
			return thunkAPI.rejectWithValue('Error on post loading');
		}
	}
);
