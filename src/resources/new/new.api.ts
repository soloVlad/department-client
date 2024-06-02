import { useQuery } from "@tanstack/react-query";

import api from "@/api";

import type { ResponseList, ResponseOne } from "@/types";
import type { NewResponse, New } from ".";

export function useNews() {
	const fetchFetchSubjects = () =>
		api.get<ResponseList<NewResponse>>(
			"/news?populate[0]=coverImage&sort=createdAt:desc",
		);

	const response = useQuery({
		queryKey: ["news"],
		// @ts-ignore-next-line
		queryFn: fetchFetchSubjects,
	});

	if (!response?.data) {
		return {
			news: [],
		};
	}

	const news = response.data.data.data.map((newsPiece) => {
		return {
			id: newsPiece.id,
			title: newsPiece.attributes.title,
			shortDescription: newsPiece.attributes.shortDescription,
			content: newsPiece.attributes.content,
			category: newsPiece.attributes.category,
			coverImageUrl: newsPiece.attributes.coverImage.data.attributes.url,
			createdAt: newsPiece.attributes.createdAt,
		} as New;
	});

	return {
		news,
	};
}

export function useNewsPiece(newsPieceId: string | undefined) {
	const fetchFetchSubjects = () =>
		api.get<ResponseOne<NewResponse>>(
			`/news/${newsPieceId}?populate[0]=coverImage`,
		);

	const response = useQuery({
		queryKey: ["newsPiece"],
		// @ts-ignore-next-line
		queryFn: fetchFetchSubjects,
	});

	if (!response?.data || !newsPieceId) {
		return {
			newsPiece: null,
		};
	}

	const { id, attributes } = response.data.data.data;

	const newsPiece = {
		id,
		title: attributes.title,
		shortDescription: attributes.shortDescription,
		content: attributes.content,
		category: attributes.category,
		coverImageUrl:
			import.meta.env.VITE_SERVER_URL +
			attributes.coverImage.data.attributes.url,
		createdAt: attributes.createdAt,
	} as New;

	return {
		newsPiece,
	};
}
