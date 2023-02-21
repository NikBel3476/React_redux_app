import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchPost} from "../../store/ActionCreators";
import cn from "classnames";
import styles from './PostPage.module.css';

const PostPage = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const { post, isLoading, error } = useAppSelector(state => state.postReducer);

	useEffect(() => {
		dispatch(fetchPost(Number(id)));
	}, []);

	if (isLoading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>)
	}

	if (error || post === null) {
		return (
			<div>
				<h1>{error}</h1>
			</div>
		)
	}

	return (
		<div className={cn(styles.container)}>
			<h1>
				{post.title}
			</h1>
			<p>
				{post.body}
			</p>
		</div>
	);
};

export default PostPage;
