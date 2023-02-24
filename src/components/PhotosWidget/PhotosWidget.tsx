import React, { FC, useRef, useState } from 'react';
import { useGetPhotosByAlbumIdQuery } from '../../store/api/photoApi';
import { useParams } from 'react-router-dom';
import styles from './PhotosWidget.module.css';
import cn from 'classnames';
import { useObserver } from '../../hooks/useObserver';

type PhotosWidgetProps = {
	className?: string;
};

const PhotosWidget: FC<PhotosWidgetProps> = ({ className }) => {
	const { id } = useParams<{ id: string }>();
	const [page, setPage] = useState<number>(1);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [limit, setLimit] = useState<number>(5);
	const {
		data: photos,
		isLoading,
		isFetching,
		error
	} = useGetPhotosByAlbumIdQuery({ albumId: Number(id), page, limit });
	const lastElement = useRef<HTMLDivElement | null>(null);

	useObserver(lastElement, page < Number(photos?.totalPages), isFetching, () => {
		setPage(page + 1);
	});

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
			{photos.data.length === 0 && <h3>No photos</h3>}
			{photos.data.map(photo => (
				<div key={photo.id}>
					<h3>{photo.title}</h3>
					<div className={styles.imageWrapper}>
						<img className={styles.photo} src={photo.url} alt={photo.title} />
					</div>
				</div>
			))}
			<div className={styles.intersectionBlock} ref={lastElement} />
		</div>
	);
};

export default PhotosWidget;
