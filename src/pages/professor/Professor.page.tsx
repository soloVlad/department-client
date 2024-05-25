import type { FC } from "react";
import { useParams } from "react-router-dom";
import { Group } from "@mantine/core";

import { professorApi } from "@/resources/professor";

import { SectionContainer } from "@/components";

import { ProfessorInfo } from "./components";

import classes from "./Professor.module.css";

const ProfessorPage: FC = () => {
	const { id } = useParams();

	const { professor } = professorApi.useProfessor(id);

	return (
		<SectionContainer classNames={{ section: classes.section }}>
			<Group gap={30}>{professor && <ProfessorInfo {...professor} />}</Group>
		</SectionContainer>
	);
};

export default ProfessorPage;
