import type { FC, PropsWithChildren } from "react";
import { Box, Container } from "@mantine/core";

import { AppContainer } from "..";

type SectionContainerProps = PropsWithChildren & {
	classNames?: {
		app?: string;
		section?: string;
	};
};

const SectionContainer: FC<SectionContainerProps> = ({
	children,
	classNames,
}) => {
	return (
		<AppContainer className={classNames?.app}>
			<Box px={20}>
				<Container className={classNames?.section}>{children}</Container>
			</Box>
		</AppContainer>
	);
};

export default SectionContainer;
