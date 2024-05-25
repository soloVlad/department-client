import type { FC } from "react";
import { Group, Stack, Title } from "@mantine/core";

import type { StudentWork } from "@/resources/professor";

import classes from "./ProfessorWork.module.css";

type ProfessorWorkProps = StudentWork;

const ProfessorWork: FC<ProfessorWorkProps> = ({
	studentFullName,
	course,
	topic,
}) => {
	return (
		<Group className={classes.wrapper} wrap="nowrap">
			<Title order={6}>{course}</Title>

			<Stack gap={4} flex={1}>
				<Title order={5} fw={600}>
					{studentFullName}
				</Title>

				<Title order={5} fw={400}>
					{topic}
				</Title>
			</Stack>
		</Group>
	);
};

export default ProfessorWork;
