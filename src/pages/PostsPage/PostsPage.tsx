import React, { FC, useRef, useState } from 'react';
import { useGetAllPostsQuery } from '../../store/api/postApi';
import { Post } from '../../types/Post';
import PostCard from '../../components/PostCard/PostCard';
import styles from './PostPage.module.css';
import { useObserver } from '../../hooks/useObserver';

const PostsPage: FC = () => {
	const [page, setPage] = useState<number>(1);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [limit, setLimit] = useState<number>(10);
	const {
		data: posts,
		error,
		isLoading,
		isFetching
	} = useGetAllPostsQuery({ page, limit });
	const lastElement = useRef<HTMLDivElement | null>(null);

	useObserver(lastElement, page < Number(posts?.totalPages), isFetching, () => {
		setPage(page => page + 1);
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
