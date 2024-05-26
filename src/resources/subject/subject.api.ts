import api from "@/api";
import { useQuery } from "@tanstack/react-query";

import type { ResponseList } from "@/types";
import type { Subject, SubjectResponse } from ".";

export function useSubjects() {
	const fetchFetchSubjects = () =>
		api.get<ResponseList<SubjectResponse>>(
			"/subjects?populate[0]=examinations",
		);

	const response = useQuery({
		queryKey: ["subjects"],
		// @ts-ignore-next-line
		queryFn: fetchFetchSubjects,
	});

	if (!response?.data) {
		return {
			subjects: [],
		};
	}

	const subjects = response.data.data.data.map((subject) => {
		const examinations = subject.attributes.examinations.data.map(
			(examination) => ({
				id: examination.id,
				name: examination.attributes.name,
			}),
		);

		return {
			id: subject.id,
			course: subject.attributes.course,
			semester: subject.attributes.semester,
			name: subject.attributes.name,
			examinations,
		} as Subject;
	});

	return {
		subjects,
	};
}
