import { MutableRefObject, useEffect, useRef } from 'react';

export const useObserver = (
	ref: MutableRefObject<Element | null>,
	canLoad: boolean,
	isLoading: boolean,
	callback: () => void
): void => {
	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		if (isLoading) {
			return;
		}
		if (observer.current) {
			observer.current.disconnect();
		}

		if (ref.current) {
			const cb = (entries: IntersectionObserverEntry[]): void => {
				if (entries[0].isIntersecting && canLoad) {
					callback();
				}
			};
			observer.current = new IntersectionObserver(cb);
			observer.current?.observe(ref.current);
		}
	}, [isLoading]);
};
