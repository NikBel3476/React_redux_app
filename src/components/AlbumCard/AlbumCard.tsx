import React, { FC, MouseEventHandler } from 'react';
import styles from './AlbumCard.module.css';
import { Album } from '../../types/Album';
import cn from 'classnames';

type AlbumCardProps = {
	className?: string;
	album: Album;
	onClick?: MouseEventHandler;
};

const AlbumCard: FC<AlbumCardProps> = ({ className, album, onClick }) => {
	return (
		<div className={cn(className, styles.container)} key={album.id} onClick={onClick}>
			<h3 className={styles.title}>{album.title}</h3>
		</div>
	);
};

export default AlbumCard;
