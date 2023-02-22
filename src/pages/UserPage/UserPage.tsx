import React, { FC } from 'react';
import { useGetUserByIdQuery } from '../../store/api/userApi';
import { useParams } from 'react-router-dom';
import styles from './UserPage.module.css';
import cn from 'classnames';

const UserPage: FC = () => {
	const { id } = useParams<{ id: string }>();
	const { data: user, isLoading, error } = useGetUserByIdQuery(Number(id));

	if (isLoading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	if (Boolean(error) || user === undefined) {
		return (
			<div>
				<h1>Error on load user</h1>
			</div>
		);
	}

	return (
		<div className={cn(styles.container)}>
			<h1>{user.name}</h1>
			<p>{user.username}</p>
		</div>
	);
};

export default UserPage;
