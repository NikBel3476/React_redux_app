import React, { FC, useState } from 'react';
import { useGetAllUsersQuery } from '../../store/api/userApi';
import UserCard from '../../components/UserCard';
import cn from 'classnames';
import styles from './UsersPage.module.css';

const UsersPage: FC = () => {
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(10);
	const { data: users, error, isLoading } = useGetAllUsersQuery({ page, limit });

	if (isLoading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	if (error) {
		return (
			<div>
				<h1>Error on users loading</h1>
			</div>
		);
	}

	return (
		<main className={cn(styles.container)}>
			{users?.length != null &&
				users.map(user => (
					<UserCard user={user} key={user.id} className={styles.userCard} />
				))}
		</main>
	);
};

export default UsersPage;
