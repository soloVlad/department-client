import type { FC } from "react";
import { Box } from "@mantine/core";

import { SectionContainer, TableOfContent } from "@/components";

import { Formation, Partners, ShortInfoTable } from "./components";

import classes from "./Applicants.module.css";

const content = [
	{ label: "Становление специальности", id: "formation", order: 1 },
	{ label: "Краткая информация о специальности", id: "short-info", order: 1 },
	{ label: "Компании-партнёры", id: "partners", order: 1 },
];

const ApplicantsPage: FC = () => {
	return (
		<SectionContainer classNames={{ section: classes.section }}>
			<Box>
				<ShortInfoTable />
				<Formation />
				<Partners />
			</Box>

			<TableOfContent className={classes.tableOfContent} items={content} />
		</SectionContainer>
	);
};

export default ApplicantsPage;
