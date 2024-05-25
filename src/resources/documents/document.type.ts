import type { ResponseOneWithoutMeta, StrapiDoc } from "@/types";

export type DocumentCategory = {
	category: string;
	key: string;
};

export type DocumentResponse = {
	name: string;
	file: StrapiDoc;
	document_category: ResponseOneWithoutMeta<DocumentCategory>;
};

export type Document = {
	name: string;
	file: {
		url: string;
		ext: string;
	};
	category: {
		name: string;
		key: string;
	};
};
