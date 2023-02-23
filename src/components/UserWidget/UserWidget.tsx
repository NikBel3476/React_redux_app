import React, { FC } from 'react';
import { useGetUserByIdQuery } from '../../store/api/userApi';
import UserDetails from '../UserDetails';

type UserWidgetProps = {
	id: number;
};

const UserWidget: FC<UserWidgetProps> = ({ id }) => {
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

	return <UserDetails user={user} />;
};

export default UserWidget;
