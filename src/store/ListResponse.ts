export type ListResponse<T> = {
	totalCount: number;
	totalPages: number;
	data: T[];
};
