import React, { FC } from 'react';
import { User } from '../../types/User';
import cn from 'classnames';
import styles from './UserCard.module.css';
import { useNavigate } from 'react-router-dom';

type UserCardProps = {
	className?: string;
	user: User;
};

const UserCard: FC<UserCardProps> = ({ className, user }) => {
	const navigate = useNavigate();

	return (
		<div
			className={cn(styles.container, className)}
			onClick={() => navigate(`${user.id}`)}
		>
			<h2 className={styles.username}>{user.username}</h2>
			<p>{user.name}</p>
		</div>
	);
};

export default UserCard;
