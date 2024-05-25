import type {
	ResponseListWithoutMeta,
	ResponseOneWithoutMeta,
	StrapiImage,
} from "@/types";
import type { ProfessorDegree } from "./professor.enums";

export type Professor = {
	fullName: string;
	shownInPreview: boolean;
	isRetired: boolean;
	degree: DegreeStrapi;
	priority: number;
	email: string;
	address?: string;
	number?: number;
	avatar: StrapiImage;
	studentWorks: StudentWorkResponse;
};

type Degree = {
	name: string;
};

export type DegreeStrapi = ResponseOneWithoutMeta<Degree>;

export type StudentWork = {
	id: number;
	topic: string;
	course: string;
	studentFullName: string;
};

export type StudentWorkResponse = ResponseListWithoutMeta<StudentWork>;

export type ProfessorFilterKey = ProfessorDegree | "retired" | null;

export type ProfessorFilter = {
	label: string;
	filterKey: ProfessorFilterKey;
};
