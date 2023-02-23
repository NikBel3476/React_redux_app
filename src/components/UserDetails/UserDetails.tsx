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
			<h1>{user.username}</h1>
			<p>name: {user.name}</p>
			<p>email: {user.email}</p>
			<div>
				<h3>address</h3>
				<p>street: {user.address.street}</p>
				<p>suite: {user.address.suite}</p>
				<p>city: {user.address.city}</p>
				<p>zipcode: {user.address.zipcode}</p>
				<p>
					geo: {user.address.geo.lat} {user.address.geo.lng}
				</p>
			</div>
			<p>phone: {user.phone}</p>
			<p>website: {user.website}</p>
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
