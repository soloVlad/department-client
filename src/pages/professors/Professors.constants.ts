import { ProfessorDegree, type ProfessorFilter } from "@/resources/professor";

export const FILTERS: ProfessorFilter[] = [
	{
		label: "Все",
		filterKey: null,
	},
	{
		label: "Профессора",
		filterKey: ProfessorDegree.PROFESSOR,
	},
	{
		label: "Доценты",
		filterKey: ProfessorDegree.ASSISTANT_PROFESSOR,
	},
	{
		label: "Старшие преподаватели",
		filterKey: ProfessorDegree.SENIOR,
	},
	{
		label: "Ассистенты",
		filterKey: ProfessorDegree.ASSISTANT,
	},
	{
		label: "Прошлых лет",
		filterKey: "retired",
	},
];
