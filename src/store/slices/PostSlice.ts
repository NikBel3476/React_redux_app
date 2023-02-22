import { Post } from '../../types/Post';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPost } from '../ActionCreators';

type PostState = {
	post: Post | null;
	isLoading: boolean;
	error: string;
};

const initialState: PostState = {
	post: null,
	isLoading: false,
	error: ''
};

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPost.pending.type]: state => {
			state.isLoading = true;
		},
		[fetchPost.fulfilled.type]: (state, action: PayloadAction<Post>) => {
			state.isLoading = false;
			state.post = action.payload;
			state.error = '';
		},
		[fetchPost.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

export default postSlice.reducer;
