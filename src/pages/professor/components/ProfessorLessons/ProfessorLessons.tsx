import { useMemo, type FC, useState } from "react";
import { Group, Select, Text } from "@mantine/core";
import groupBy from "lodash.groupby";
import capitalize from "lodash.capitalize";

import type { Lesson } from "@/resources/professor";

import { BorderedSection } from "@/components";

import classes from "./ProfessorLessons.module.css";

type ProfessorLessonsProps = {
	lessons: Lesson[];
};

const ProfessorLessons: FC<ProfessorLessonsProps> = ({ lessons }) => {
	const [dayOfWeek, setDayOfWeek] = useState<string | null>("");

	const lessonsByDayOfWeek = useMemo(() => {
		return groupBy(lessons, (lesson) => lesson.dayOfWeek);
	}, [lessons]);

	const daysOfWeek = useMemo(() => {
		const days = Object.keys(lessonsByDayOfWeek).map((day) => ({
			label: capitalize(day),
			value: day,
		}));

		setDayOfWeek(days[0].value);

		return days;
	}, [lessonsByDayOfWeek]);

	const shownLessons = useMemo(() => {
		if (!dayOfWeek) return [];

		return lessonsByDayOfWeek[dayOfWeek];
	}, [dayOfWeek, lessonsByDayOfWeek]);

	return (
		<BorderedSection title="Где найти">
			{dayOfWeek && (
				<Select
					data={daysOfWeek}
					value={dayOfWeek}
					onChange={setDayOfWeek}
					allowDeselect={false}
				/>
			)}

			{shownLessons.map((lesson) => (
				<Group key={lesson.id} className={classes.lessonWrapper} gap={40}>
					<Group className={classes.timeWrapper} gap={4}>
						<Text>{lesson.startTime}</Text>
						<Text>:</Text>
						<Text>{lesson.endTime}</Text>
					</Group>

					<Text className={classes.classroom}>{lesson.classroom}</Text>
				</Group>
			))}
		</BorderedSection>
	);
};

export default ProfessorLessons;
