import React, { FC } from 'react';
import cn from 'classnames';
import styles from './CommentsWidget.module.css';
import CommentCard from '../CommentCard';
import { Comment } from '../../types/Comment';

type CommentsWidgetProps = {
	className?: string;
	comments: Comment[];
};

const CommentsWidget: FC<CommentsWidgetProps> = ({ className, comments }) => {
	return (
		<section className={cn(styles.container, className)}>
			{comments.length === 0 && <p>There is no comments</p>}
			{comments.length > 0 &&
				comments.map(comment => (
					<CommentCard
						className={styles.commentCard}
						key={comment.id}
						comment={comment}
					/>
				))}
		</section>
	);
};

export default CommentsWidget;
