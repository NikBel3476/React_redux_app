import React, { FC } from 'react';
import { useGetPhotosByAlbumIdQuery } from '../../store/api/photoApi';
import { useParams } from 'react-router-dom';
import styles from './PhotosWidget.module.css';
import cn from 'classnames';

type PhotosWidgetProps = {
	className?: string;
};

const PhotosWidget: FC<PhotosWidgetProps> = ({ className }) => {
	const { id } = useParams<{ id: string }>();
	const {
		data: photos,
		isLoading,
		error
	} = useGetPhotosByAlbumIdQuery({ albumId: Number(id) });

	if (isLoading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}

	if (Boolean(error) || photos === undefined) {
		return (
			<div>
				<h1>Failed to load photos</h1>
			</div>
		);
	}

	return (
		<div className={cn(styles.container, className)}>
			{photos.map(photo => (
				<div key={photo.id}>
					<h3>{photo.title}</h3>
					<div className={styles.imageWrapper}>
						<img className={styles.photo} src={photo.url} alt={photo.title} />
					</div>
				</div>
			))}
		</div>
	);
};

export default PhotosWidget;
