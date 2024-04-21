import type { FC } from "react";
import { Box } from "@mantine/core";

import { SectionContainer, TableOfContent } from "@/components";

import { Formation } from "./components";

import classes from "./Applicants.module.css";

const content = [
	{ label: "Становление специальности", id: "formation", order: 1 },
];

const ApplicantsPage: FC = () => {
	return (
		<SectionContainer classNames={{ section: classes.section }}>
			<Box>
				<Formation />
			</Box>

			<TableOfContent className={classes.tableOfContent} items={content} />
		</SectionContainer>
	);
};

export default ApplicantsPage;
