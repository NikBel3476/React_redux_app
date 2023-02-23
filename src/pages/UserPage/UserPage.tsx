import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import styles from './UserPage.module.css';
import cn from 'classnames';
import UserWidget from '../../components/UserWidget';
import AlbumsWidget from '../../components/AlbumsWidget';

const UserPage: FC = () => {
	const { id } = useParams<{ id: string }>();

	return (
		<div className={cn(styles.container)}>
			<UserWidget id={Number(id)} />
			<h2>Albums</h2>
			<AlbumsWidget userId={Number(id)} />
		</div>
	);
};

export default UserPage;
