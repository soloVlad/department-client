import type { FC } from "react";
import { Box } from "@mantine/core";

import { SectionContainer, TableOfContent } from "@/components";

import {
	Formation,
	History,
	ProfessorsPreview,
	ResearchAreas,
	Specializations,
} from "./components";

import classes from "./About.module.css";

const content = [
	{ label: "История", id: "history", order: 1 },
	{ label: "Становление специальности", id: "formation", order: 1 },
	{ label: "Преподавательский состав", id: "professors", order: 1 },
	{ label: "Научные направления", id: "areas", order: 1 },
	{ label: "Специализации", id: "specializations", order: 1 },
];

const AboutPage: FC = () => {
	return (
		<SectionContainer classNames={{ section: classes.section }}>
			<Box>
				<History />
				<Formation />
				<ProfessorsPreview />
				<ResearchAreas />
				<Specializations />
			</Box>

			<TableOfContent className={classes.tableOfContent} items={content} />
		</SectionContainer>
	);
};

export default AboutPage;
