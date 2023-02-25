import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetAlbumByIdQuery } from '../../store/api/albumApi';
import PhotosWidget from '../../components/PhotosWidget';
import styles from './AlbumPage.module.css';

const AlbumPage: FC = () => {
	const { id } = useParams<{ id: string }>();
	const { data: album, isLoading, error } = useGetAlbumByIdQuery(Number(id));

	if (isLoading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	if (Boolean(error) || album === undefined) {
		return (
			<div>
				<h1>Error on loading album</h1>
			</div>
		);
	}

	return (
		<main className={styles.container}>
			<h1 className={styles.title}>{album.title}</h1>
			<PhotosWidget />
		</main>
	);
};

export default AlbumPage;
