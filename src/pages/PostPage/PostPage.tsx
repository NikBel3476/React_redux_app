import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';
import styles from './PostPage.module.css';
import { useGetCommentsByPostIdQuery } from '../../store/api/commentApi';
import CommentsWidget from '../../components/CommentsWidget';
import { useGetPostByIdQuery } from '../../store/api/postApi';

const PostPage: FC = () => {
	const { id } = useParams<{ id: string }>();
	const {
		data: postFromApi,
		isLoading: isPostLoading,
		error: postError
	} = useGetPostByIdQuery(Number(id));
	const {
		data: comments,
		isLoading: commentsIsLoading,
		error: commentsError
	} = useGetCommentsByPostIdQuery({ postId: Number(id) });

	if (isPostLoading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	if (Boolean(postError) || postFromApi === undefined) {
		return (
			<div>
				<h1>Failed on loading post</h1>
			</div>
		);
	}

	return (
		<main className={cn(styles.container)}>
			<h1 className={styles.postTitle}>{postFromApi.title}</h1>
			<p className={styles.postBody}>{postFromApi.body}</p>
			<section className={styles.commentsWrapper}>
				<h2 className={styles.commentsTitle}>Comments</h2>
				{commentsIsLoading && <h3>Comments loading...</h3>}
				{Boolean(commentsError) || comments === undefined ? (
					<h3>Error on loading comments</h3>
				) : (
					<CommentsWidget comments={comments} />
				)}
			</section>
		</main>
	);
};

export default PostPage;
