import React, { FC, MouseEvent } from 'react';
import { useGetAlbumsByUserIdQuery } from '../../store/api/albumApi';
import cn from 'classnames';
import styles from './AlbumsWidget.module.css';
import { useNavigate } from 'react-router-dom';
import { ALBUMS_ROUTE } from '../../router/routes';
import AlbumCard from '../AlbumCard';

type AlbumsWidgetProps = {
	className?: string;
	userId: number;
};

const AlbumsWidget: FC<AlbumsWidgetProps> = ({ className, userId }) => {
	const navigate = useNavigate();
	const { data: albums, isLoading, error } = useGetAlbumsByUserIdQuery({ userId });

	const handleAlbumWidgetClick = (_: MouseEvent, albumId: number): void => {
		navigate(`${ALBUMS_ROUTE}/${albumId}`);
	};

	if (isLoading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	if (Boolean(error) || albums === undefined) {
		return (
			<div>
				<h1>Error on loading albums</h1>
			</div>
		);
	}

	return (
		<div className={cn(styles.container, className)}>
			{albums.map(album => (
				<AlbumCard
					className={styles.albumCard}
					key={album.id}
					album={album}
					onClick={e => handleAlbumWidgetClick(e, album.id)}
				/>
			))}
		</div>
	);
};

export default AlbumsWidget;
