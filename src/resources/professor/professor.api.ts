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
			`/professors/${id}?populate[0]=avatar&populate[1]=degree&populate[2]=studentWorks&populate[3]=lessons&populate[4]=work_themes`,
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

	const lessons = data.lessons.data.map((lesson) => {
		return {
			// @ts-ignore-next-line
			id: lesson.id,
			...lesson.attributes,
		};
	});

	const work_themes = data.work_themes.data.map((theme) => {
		return {
			id: theme.id,
			name: theme.attributes.name,
		};
	});

	return {
		professor: {
			imageUrl: data.avatar.data.attributes.url,
			degree: data.degree.data.attributes.name,
			email: data.email,
			address: data?.address,
			number: data?.number,
			studentWorks,
			lessons,
			work_themes,
		},
	};
}
