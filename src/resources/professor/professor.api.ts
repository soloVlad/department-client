import api from "@/api";
import { useQuery } from "@tanstack/react-query";

import type { ResponseOne, ResponseList } from "@/types";
import type { Professor } from ".";

export function useProfessors() {
	const fetchProfessors = () =>
		api.get<ResponseList<Professor>>(
			"/professors?populate[0]=avatar&populate[1]=degree&sort=priority:desc",
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

export function useProfessor(id: string | undefined) {
	const fetchProfessor = () =>
		api.get<ResponseOne<Professor>>(
			`/professors/${id}?populate[0]=avatar&populate[1]=degree&populate[2]=studentWorks`,
		);

	const response = useQuery({
		queryKey: ["professor", id],
		queryFn: fetchProfessor,
	});

	if (!response?.data) {
		return {
			professor: null,
		};
	}

	const data = response.data.data.data.attributes;

	const studentWorks = data.studentWorks.data.map((work) => {
		return {
			id: work.id,
			topic: work.attributes.topic,
			studentFullName: work.attributes.studentFullName,
			course: work.attributes.course,
		};
	});

	return {
		professor: {
			imageUrl:
				import.meta.env.VITE_SERVER_URL + data.avatar.data.attributes.url,
			degree: data.degree.data.attributes.name,
			email: data.email,
			address: data?.address,
			number: data?.number,
			studentWorks,
		},
	};
}
