import type { ResponseListWithoutMeta } from "@/types";
import type { COURSE } from "../study";
import type { Semester } from "./subject.enums";

export type Subject = BaseSubject & {
	id: number;
	examinations: {
		id: number;
		name: string;
	}[];
};

export type BaseSubject = {
	name: string;
	course: COURSE;
	semester: Semester;
};

export type SubjectResponse = BaseSubject & {
	examinations: ExaminationResponse;
};

export type Examination = {
	name: string;
};

export type ExaminationResponse = ResponseListWithoutMeta<Examination>;
