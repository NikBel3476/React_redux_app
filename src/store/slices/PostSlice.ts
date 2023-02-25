import { Post } from '../../types/Post';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPost } from '../ActionCreators';

type PostState = {
	post: Post | null;
	isLoading: boolean;
	error: string;
	page: number;
	limit: number;
};

const initialState: PostState = {
	post: null,
	isLoading: false,
	error: '',
	page: 1,
	limit: 10
};

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		incrementPage: state => {
			state.page += 1;
		},
		decrementPage: state => {
			state.page -= 1;
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPost.pending.type, (state, action) => {
				state.isLoading = true;
			})
			.addCase(fetchPost.fulfilled.type, (state, action: PayloadAction<Post>) => {
				state.isLoading = false;
				state.post = action.payload;
				state.error = '';
			})
			.addCase(fetchPost.rejected.type, (state, action: PayloadAction<string>) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	}
});

export const { incrementPage, decrementPage, setPage } = postSlice.actions;

export default postSlice.reducer;
