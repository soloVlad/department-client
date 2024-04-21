import { Stack, Title } from "@mantine/core";
import type { FC, PropsWithChildren } from "react";

type TitledSectionProps = PropsWithChildren & {
	title: string;
	id?: string;
	mt?: number;
	mb?: number;
	className?: string;
};

const TitledSection: FC<TitledSectionProps> = ({
	title,
	id,
	mt,
	mb,
	className,
	children,
}) => {
	return (
		<Stack id={id} mt={mt} mb={mb} gap={20} className={className}>
			<Title order={2}>{title}</Title>

			{children}
		</Stack>
	);
};

export default TitledSection;
