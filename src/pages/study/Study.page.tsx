import { useState, type FC } from "react";
import { Group } from "@mantine/core";

import { COURSE } from "@/resources/study";
import { CheckButton, SectionContainer, TitledSection } from "@/components";

import { SemesterTable } from "./components";
import { STUDY } from "./Study.constants";

import classes from "./Study.module.css";

const StudyPage: FC = () => {
	const [currentCourse, setCurrentCourse] = useState<COURSE>(COURSE.FIRST);

	const semesters = STUDY[currentCourse];

	const handleCourseChange = (course: COURSE) => {
		setCurrentCourse(course);
	};

	return (
		<SectionContainer classNames={{ section: classes.section }}>
			<TitledSection title="Учеба" mb={85}>
				<Group gap={10}>
					{Object.values(COURSE).map((course) => (
						<CheckButton<COURSE>
							label={course}
							filterKey={course as COURSE}
							activeFilter={currentCourse}
							onClick={handleCourseChange}
						/>
					))}
				</Group>

				<Group className={classes.wrapper}>
					{semesters.map((semester) => (
						<SemesterTable
							period={semester.period}
							course={semester.name}
							subjects={semester.subjects}
						/>
					))}
				</Group>
			</TitledSection>
		</SectionContainer>
	);
};

export default StudyPage;
