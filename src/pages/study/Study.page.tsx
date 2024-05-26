import { useState, type FC, useMemo } from "react";
import { Group } from "@mantine/core";
import capitalize from "lodash.capitalize";
import groupBy from "lodash.groupby";

import { COURSE } from "@/resources/study";
import { subjectApi } from "@/resources/subject";
import { CheckButton, SectionContainer, TitledSection } from "@/components";

import { SemesterTable } from "./components";

import classes from "./Study.module.css";

const StudyPage: FC = () => {
	const [currentCourse, setCurrentCourse] = useState<COURSE>(COURSE.FIRST);

	const handleCourseChange = (course: COURSE) => {
		setCurrentCourse(course);
	};

	const { subjects } = subjectApi.useSubjects();

	const shownSubjects = useMemo(() => {
		return subjects.filter((subject) => subject.course === currentCourse);
	}, [subjects, currentCourse]);

	const subjectsBySemester = useMemo(() => {
		return groupBy(shownSubjects, (subject) => subject.semester);
	}, [shownSubjects]);

	const semesters = useMemo(() => {
		return Object.keys(subjectsBySemester);
	}, [subjectsBySemester]);

	return (
		<SectionContainer classNames={{ section: classes.section }}>
			<TitledSection title="Учеба" mb={85}>
				<Group gap={10}>
					{Object.values(COURSE).map((course) => (
						<CheckButton<COURSE>
							label={capitalize(course)}
							filterKey={course as COURSE}
							activeFilter={currentCourse}
							onClick={handleCourseChange}
						/>
					))}
				</Group>

				<Group className={classes.wrapper}>
					{semesters.map((semester) => (
						<SemesterTable
							period={semester}
							course={currentCourse}
							subjects={subjectsBySemester[semester]}
						/>
					))}
				</Group>
			</TitledSection>
		</SectionContainer>
	);
};

export default StudyPage;
