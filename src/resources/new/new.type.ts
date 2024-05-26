import type { StrapiImage } from "@/types";

export type BaseNew = {
	content: string;
	title: string;
	shortDescription: string;
	category: string;
};

export type New = BaseNew & {
	id: number;
	coverImageUrl?: string;
	createdAt: string;
};

export type NewResponse = BaseNew & {
	coverImage: StrapiImage;
};
