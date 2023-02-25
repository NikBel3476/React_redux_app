import React, { FC } from 'react';
import styles from './CommentCard.module.css';
import { Comment } from '../../types/Comment';
import cn from 'classnames';
import accountIcon from '../../assets/icons/account_circle.svg';

type CommentCardProps = {
	className?: string;
	comment: Comment;
	icon?: string;
};

const CommentCard: FC<CommentCardProps> = ({ className, comment }) => {
	return (
		<div className={cn(styles.container, className)}>
			<div className={styles.commentHeader}>
				<img className={styles.icon} src={accountIcon} alt="account icon" />
				<h2 className={styles.commentEmail}>{comment.email}</h2>
			</div>
			<h3 className={styles.commentTitle}>{comment.name}</h3>
			<p className={styles.commentBody}>{comment.body}</p>
		</div>
	);
};

export default CommentCard;
