import { useQuery } from "@tanstack/react-query";
import api from "@/api";
import type { ResponseList } from "@/types";

import type {
	DocumentResponse,
	DocumentCategory,
	Document,
} from "./document.type";

export function useDocumentCategories() {
	const fetchDocumentCategories = () =>
		api.get<ResponseList<DocumentCategory>>("/document-categories");

	const response = useQuery({
		queryKey: ["document-categories"],
		queryFn: fetchDocumentCategories,
	});

	if (!response?.data) {
		return {
			categories: [],
		};
	}

	return {
		categories: response.data.data.data,
	};
}

export function useDocuments() {
	const fetchDocuments = () =>
		api.get<ResponseList<DocumentResponse>>(
			"/documents?populate[0]=file&populate[1]=document_category",
		);

	const response = useQuery({
		queryKey: ["documents"],
		queryFn: fetchDocuments,
	});

	if (!response?.data) {
		return {
			documents: [],
		};
	}

	const documentsResponse = response.data.data.data;

	const documents = documentsResponse.map((documentResponse) => {
		const { file, name, document_category } = documentResponse.attributes;

		return {
			name,
			file: {
				url: import.meta.env.VITE_SERVER_URL + file.data.attributes.url,
				ext: file.data.attributes.ext,
			},
			category: {
				name: document_category.data.attributes.category,
				key: document_category.data.attributes.key,
			},
		} as Document;
	});

	return {
		documents,
	};
}
