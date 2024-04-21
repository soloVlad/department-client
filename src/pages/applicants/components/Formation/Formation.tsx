import type { FC } from "react";
import { Box, Text } from "@mantine/core";

import { Timeline, TitledSection } from "@/components";

import { timeline } from "./Formation.constants";

import classes from "./Formations.module.css";

const Formation: FC = () => {
	return (
		<TitledSection id="formation" title="Становление специальности">
			<Text fz={18}>
				Специальность «Математика и компьютерные науки» была основана в 2023
				году, а выпускающая кафедра веб-технологий и компьютерного моделирования
				ведет свою историю с 1973 года.
			</Text>

			<Box className={classes.timelineWrapper}>
				<Timeline items={timeline} />
			</Box>
		</TitledSection>
	);
};

export default Formation;
