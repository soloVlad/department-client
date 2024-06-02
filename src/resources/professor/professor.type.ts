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
	lessons: LessonResponse;
	work_themes: WorkThemeResponse;
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

export type Lesson = {
	id: number;
	startTime: string;
	endTime: string;
	classroom: string;
	dayOfWeek: string;
};

export type LessonResponse = ResponseListWithoutMeta<Lesson>;

export type WorkTheme = {
	id: number;
	name: string;
};

export type WorkThemeResponse = ResponseListWithoutMeta<WorkTheme>;

export type ProfessorFilterKey = ProfessorDegree | "retired" | null;

export type ProfessorFilter = {
	label: string;
	filterKey: ProfessorFilterKey;
};
