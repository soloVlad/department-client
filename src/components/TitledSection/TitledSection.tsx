import { Stack, Title } from "@mantine/core";
import type { FC, PropsWithChildren } from "react";

type TitledSectionProps = PropsWithChildren & {
	title: string;
};

const TitledSection: FC<TitledSectionProps> = ({ title, children }) => {
	return (
		<Stack gap={20}>
			<Title order={2}>{title}</Title>

			{children}
		</Stack>
	);
};

export default TitledSection;
