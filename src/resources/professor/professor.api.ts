import api from "@/api";
import type { ResponseList } from "@/types";
import { useQuery } from "@tanstack/react-query";
import type { Professor } from ".";

export function useProfessors() {
	const fetchProfessors = () =>
		api.get<ResponseList<Professor>>(
			"/professors?populate[0]=avatar&populate[1]=degree",
		);

	const response = useQuery({
		queryKey: ["professors"],
		// @ts-ignore-next-line
		queryFn: fetchProfessors,
	});

	if (!response?.data) {
		return {
			professors: [],
		};
	}

	return {
		professors: response.data.data.data,
	};
}
