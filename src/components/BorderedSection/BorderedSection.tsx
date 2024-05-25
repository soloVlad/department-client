import { Stack, Title } from "@mantine/core";
import type { FC, PropsWithChildren } from "react";

import classes from "./BorderedSection.module.css";

type BorderedSectionProps = PropsWithChildren & {
	title: string;
};

const BorderedSection: FC<BorderedSectionProps> = ({ title, children }) => {
	return (
		<Stack className={classes.wrapper} gap={0}>
			<Title className={classes.title} order={5}>
				{title}
			</Title>

			{children}
		</Stack>
	);
};

export default BorderedSection;
