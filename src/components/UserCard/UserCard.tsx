import React, { FC } from 'react';
import { User } from '../../types/User';
import cn from 'classnames';
import styles from './UserCard.module.css';

type UserCardProps = {
	className?: string;
	user: User;
};

const UserCard: FC<UserCardProps> = ({ className, user }) => {
	return (
		<div className={cn(className, styles.container)}>
			<h2>{user.username}</h2>
			<p>{user.name}</p>
		</div>
	);
};

export default UserCard;
