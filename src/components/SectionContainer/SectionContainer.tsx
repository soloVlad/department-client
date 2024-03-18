import type { FC, PropsWithChildren } from "react";
import { Container } from "@mantine/core";
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
			<Container className={classNames?.section}>{children}</Container>
		</AppContainer>
	);
};

export default SectionContainer;
