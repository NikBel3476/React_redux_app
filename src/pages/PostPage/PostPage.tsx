import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPost } from '../../store/ActionCreators';
import cn from 'classnames';
import styles from './PostPage.module.css';
import { useGetCommentsByPostIdQuery } from '../../store/api/commentApi';
import CommentsWidget from '../../components/CommentsWidget';

const PostPage: FC = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const { post, isLoading, error } = useAppSelector(state => state.postReducer);
	const {
		data: comments,
		isLoading: commentsIsLoading,
		error: commentsError
	} = useGetCommentsByPostIdQuery({ postId: Number(id) });

	useEffect(() => {
		void dispatch(fetchPost(Number(id)));
	}, []);

	if (isLoading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	if (error || post === null) {
		return (
			<div>
				<h1>{error}</h1>
			</div>
		);
	}

	return (
		<div className={cn(styles.container)}>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
			<h2 className={styles.commentsTitle}>Comments</h2>
			{commentsIsLoading && <h3>Comments loading...</h3>}
			{Boolean(commentsError) || comments === undefined ? (
				<h3>Error on loading comments</h3>
			) : (
				<CommentsWidget comments={comments} />
			)}
		</div>
	);
};

export default PostPage;
