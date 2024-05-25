import type { ResponseOneWithoutMeta, StrapiImage } from "@/types";
import type { ProfessorDegree } from "./professor.enums";

export type Professor = {
	firstName: string;
	secondName: string;
	middleName?: string;
	shownInPreview: boolean;
	isRetired: boolean;
	degree: DegreeStrapi;
	priority: number;
	email: string;
	address?: string;
	number?: number;
	avatar: StrapiImage;
};

type Degree = {
	name: string;
};

export type DegreeStrapi = ResponseOneWithoutMeta<Degree>;

export type ProfessorFilterKey = ProfessorDegree | "retired" | null;

export type ProfessorFilter = {
	label: string;
	filterKey: ProfessorFilterKey;
};
