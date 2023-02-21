import React, { FC, useState } from 'react';
import { useGetAllUsersQuery } from '../../store/api/userApi';

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
		<main>
			{users?.length != null && users.map(user => <div key={user.id}>{user.name}</div>)}
		</main>
	);
};

export default UsersPage;
