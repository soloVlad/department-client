import { useQuery } from "@tanstack/react-query";

import api from "@/api";

import type { ResponseList } from "@/types";
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
			coverImageUrl:
				import.meta.env.VITE_SERVER_URL +
				newsPiece.attributes.coverImage.data.attributes.url,
			createdAt: newsPiece.attributes.createdAt,
		} as New;
	});

	return {
		news,
	};
}
