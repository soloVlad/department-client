import type { FC } from "react";
import { Group, Stack, Text, Title } from "@mantine/core";

import classes from "./SemesterTable.module.css";

type SemesterTableProps = {
	period: string;
	course: string;
	subjects: {
		name: string;
		professor: string;
	}[];
};

const SemesterTable: FC<SemesterTableProps> = ({
	period,
	course,
	subjects,
}) => {
	return (
		<Stack className={classes.wrapper} gap={0}>
			<Group className={classes.header}>
				<Title order={3}>{period}</Title>
				<Title order={4}>{course}</Title>
			</Group>

			{subjects.map((subject) => (
				<Group
					key={subject.name + subject.professor}
					className={classes.subject}
				>
					<Text>{subject.name}</Text>
					<Text>{subject.professor}</Text>
				</Group>
			))}
		</Stack>
	);
};

export default SemesterTable;
