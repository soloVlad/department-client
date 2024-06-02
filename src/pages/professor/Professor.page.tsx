import type { FC } from "react";
import { useParams } from "react-router-dom";
import { Group, Stack } from "@mantine/core";

import { professorApi } from "@/resources/professor";

import { SectionContainer } from "@/components";

import {
	ProfessorInfo,
	ProfessorLessons,
	ProfessorWorkThemes,
	ProfessorWorks,
} from "./components";

import classes from "./Professor.module.css";

const ProfessorPage: FC = () => {
	const { id } = useParams();

	const { professor } = professorApi.useProfessor(id);

	return (
		<SectionContainer classNames={{ section: classes.section }}>
			{professor && (
				<Group gap={30} align="flex-start">
					<ProfessorInfo {...professor} />

					<Stack gap={20} flex={1}>
						{Boolean(professor.lessons.length) && (
							<ProfessorLessons lessons={professor.lessons} />
						)}

						{Boolean(professor.studentWorks.length) && (
							<ProfessorWorks studentWorks={professor.studentWorks} />
						)}

						{Boolean(professor.work_themes.length) && (
							<ProfessorWorkThemes workThemes={professor.work_themes} />
						)}
					</Stack>
				</Group>
			)}
		</SectionContainer>
	);
};

export default ProfessorPage;
