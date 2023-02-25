import React, { FC, useRef } from 'react';
import { useGetAllPostsQuery } from '../../store/api/postApi';
import { Post } from '../../types/Post';
import PostCard from '../../components/PostCard/PostCard';
import styles from './PostPage.module.css';
import { useObserver } from '../../hooks/useObserver';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { incrementPage } from '../../store/slices/PostSlice';

const PostsPage: FC = () => {
	const page = useSelector((state: RootState) => state.postReducer.page);
	const limit = useSelector((state: RootState) => state.postReducer.limit);
	const dispatch = useDispatch();
	const {
		data: posts,
		error,
		isLoading,
		isFetching
	} = useGetAllPostsQuery({ page, limit });
	const lastElement = useRef<HTMLDivElement | null>(null);

	useObserver(lastElement, page < Number(posts?.totalPages), isFetching, () => {
		dispatch(incrementPage());
	});

	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			{Boolean(error) && <h1>Error on posts loading</h1>}
			{posts?.data?.length === 0 && <h1>There is no posts now</h1>}
			{posts?.data?.length != null &&
				posts.data.map((post: Post) => (
					<PostCard className={styles.postCard} post={post} key={post.id} />
				))}
			<div ref={lastElement} className={styles.intersectionBlock} />
		</div>
	);
};

export default PostsPage;
