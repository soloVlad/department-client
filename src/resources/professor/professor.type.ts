import type { ProfessorDegree } from "./professor.enums";

export type Professor = {
	id: string;
	firstName: string;
	secondName: string;
	middleName: string;
	degree: ProfessorDegree;
	isRetired: boolean;
	email?: string;
	address?: string;
	phone?: number;
	shownInPreview: boolean;
};

export type ProfessorFilterKey = ProfessorDegree | "retired" | null;

export type ProfessorFilter = {
	label: string;
	filterKey: ProfessorFilterKey;
};
