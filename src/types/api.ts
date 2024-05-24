export type ResponseOneWithoutMeta<T> = {
	data: CommonEntity<T>;
};

export type ResponseListWithoutMeta<T> = {
	data: CommonEntity<T>[];
};

export type ResponseList<T> = {
	data: CommonEntity<T>[];
	meta: ResponseMeta;
};

export type ResponseOne<T> = {
	data: CommonEntity<T>;
	meta: ResponseMeta;
};

export type ResponseMeta = {
	pagination: ResponsePagination;
};

export type ResponsePagination = {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
};

export type CommonEntity<T> = {
	id: number;
	attributes: T & CommonAttributes;
};

export type CommonAttributes = {
	createdAt: string;
	publishedAt: string;
	updatedAt: string;
};

export type StrapiImage = {
	data: {
		id: number;
		attributes: {
			name: string;
			alternativeText: string | null;
			caption: string | null;
			width: number;
			height: number;
			ext: string;
			url: string;
			hash: string;
			mime: string;
			path: string | null;
			size: number;
			createdAt: string;
			updatedAt: string;
		};
	};
};
