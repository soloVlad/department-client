import type { FC } from "react";
import { Box, Group, Text } from "@mantine/core";

import type { TimelineItem } from "@/types";

import classes from "./Timeline.module.css";

type TimelineProps = {
	items: TimelineItem[];
};

const Timeline: FC<TimelineProps> = ({ items }) => {
	if (!items.length) return null;

	return (
		<Box className={classes.wrapper}>
			<Box className={classes.arrow} />

			{items.map((event) => (
				<Group className={classes.row} key={event.description.slice(20)}>
					<Text className={classes.year}>{event.year}</Text>
					<Text className={classes.description}>{event.description}</Text>
				</Group>
			))}
		</Box>
	);
};

export default Timeline;
