import React, { FC } from 'react';
import styles from './PhotoCard.module.css';
import { Photo } from '../../types/Photo';
import cn from 'classnames';

type PhotoCardProps = {
	className?: string;
	photo: Photo;
};

const PhotoCard: FC<PhotoCardProps> = ({ className, photo }) => {
	return (
		<div className={cn(styles.container, className)} key={photo.id}>
			<h3 className={styles.title}>{photo.title}</h3>
			<img className={styles.photo} src={photo.url} alt={photo.title} />
		</div>
	);
};

export default PhotoCard;
