import { Stack, Title } from "@mantine/core";
import type { FC, PropsWithChildren } from "react";

type TitledSectionProps = PropsWithChildren & {
	title: string;
	mt?: number;
	className?: string;
};

const TitledSection: FC<TitledSectionProps> = ({
	className,
	title,
	mt,
	children,
}) => {
	return (
		<Stack mt={mt} gap={20} className={className}>
			<Title order={2}>{title}</Title>

			{children}
		</Stack>
	);
};

export default TitledSection;
