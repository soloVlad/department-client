import type { FC } from "react";
import { Box, Paper } from "@mantine/core";

import { SectionContainer } from "@/components";

import {
	History,
	ProfessorsPreview,
	ResearchAreas,
	Specializations,
} from "./components";

import classes from "./About.module.css";

const AboutPage: FC = () => {
	return (
		<SectionContainer classNames={{ section: classes.section }}>
			<Box>
				<History />
				<ProfessorsPreview />
				<ResearchAreas />
				<Specializations />
			</Box>

			<Paper mih={200} h="fit-content">
				bla
			</Paper>
		</SectionContainer>
	);
};

export default AboutPage;
