import React, { FC } from 'react';
import styles from './UserDtetails.module.css';
import { User } from '../../types/User';
import cn from 'classnames';

type UserDetailsProps = {
	user: User;
};

const UserDetails: FC<UserDetailsProps> = ({ user }) => {
	return (
		<div className={cn(styles.container)}>
			<h1>{user.name}</h1>
			<p>{user.username}</p>
			<p>{user.email}</p>
			<div>
				<h3>address</h3>
				<p>{user.address.street}</p>
				<p>{user.address.suite}</p>
				<p>{user.address.city}</p>
				<p>{user.address.zipcode}</p>
				<p>
					{user.address.geo.lat} {user.address.geo.lng}
				</p>
			</div>
			<p>{user.phone}</p>
			<p>{user.website}</p>
			<div>
				<h3>company</h3>
				<p>{user.company.name}</p>
				<p>{user.company.catchPhrase}</p>
				<p>{user.company.bs}</p>
			</div>
		</div>
	);
};

export default UserDetails;
