import type { FC } from "react";
import { Group, Stack, Text, Title } from "@mantine/core";
import capitalize from "lodash.capitalize";

import type { Subject } from "@/resources/subject";

import classes from "./SemesterTable.module.css";

type SemesterTableProps = {
	period: string;
	course: string;
	subjects: Subject[];
};

const SemesterTable: FC<SemesterTableProps> = ({
	period,
	course,
	subjects,
}) => {
	return (
		<Stack className={classes.wrapper} gap={0}>
			<Group className={classes.header}>
				<Title order={3}>{capitalize(period)}</Title>
				<Title order={4}>{capitalize(course)}</Title>
			</Group>

			{subjects.map((subject) => (
				<Group key={subject.id} className={classes.subject}>
					<Text>{subject.name}</Text>

					<Text c="gray-blue.5">
						{subject.examinations
							.map((exam) => capitalize(exam.name))
							.join(", ")}
					</Text>
				</Group>
			))}
		</Stack>
	);
};

export default SemesterTable;
