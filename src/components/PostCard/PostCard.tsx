import React, {FC} from 'react';
import cn from 'classnames';
import {Post} from "../../types/Post";
import styles from './PostCard.module.scss';

type PostCardProps = {
	className?: string;
	post: Post;
}

const PostCard: FC<PostCardProps> = ({ className, post }) => {
	return (
		<div className={cn(className, styles.container)}>
			<h1 className={styles.postTitle}>{ post.title }</h1>
			<p className={styles.postBody}>{ post.body }</p>
		</div>
	);
};

export default PostCard;
