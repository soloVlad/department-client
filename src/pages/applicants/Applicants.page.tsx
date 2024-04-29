import type { FC } from "react";
import { Box } from "@mantine/core";

import { SectionContainer, TableOfContent } from "@/components";

import {
	Campaign,
	Magistration,
	Partners,
	PassingScoresChart,
	ShortInfoTable,
} from "./components";

import classes from "./Applicants.module.css";

const content = [
	{ label: "Краткая информация о специальности", id: "short-info", order: 1 },
	{ label: "Проходные баллы", id: "passing-scores", order: 1 },
	{ label: "Приемная кампания 2024", id: "campaign", order: 1 },
	{ label: "Компании-партнёры", id: "partners", order: 1 },
	{ label: "Магистратура", id: "magistration", order: 1 },
];

const ApplicantsPage: FC = () => {
	return (
		<SectionContainer classNames={{ section: classes.section }}>
			<Box>
				<ShortInfoTable />
				<PassingScoresChart />
				<Campaign />
				<Partners />
				<Magistration />
			</Box>

			<TableOfContent className={classes.tableOfContent} items={content} />
		</SectionContainer>
	);
};

export default ApplicantsPage;
