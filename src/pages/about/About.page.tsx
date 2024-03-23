import type { FC } from "react";
import { Box } from "@mantine/core";

import { SectionContainer, TableOfContent } from "@/components";

import {
	History,
	ProfessorsPreview,
	ResearchAreas,
	Specializations,
} from "./components";

import classes from "./About.module.css";

const content = [
	{ label: "История", link: "#history", order: 1 },
	{ label: "Преподавательский состав", link: "#professors", order: 1 },
	{ label: "Научные направления", link: "#areas", order: 1 },
	{ label: "Специализации", link: "#specializations", order: 1 },
];

const AboutPage: FC = () => {
	return (
		<SectionContainer classNames={{ section: classes.section }}>
			<Box>
				<History />
				<ProfessorsPreview />
				<ResearchAreas />
				<Specializations />
			</Box>

			<TableOfContent className={classes.tableOfContent} items={content} />
		</SectionContainer>
	);
};

export default AboutPage;
