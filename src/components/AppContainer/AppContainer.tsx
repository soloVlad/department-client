import type { FC, PropsWithChildren } from "react";
import { Box } from "@mantine/core";

type AppContainerProps = PropsWithChildren & {
	className?: string;
};

const AppContainer: FC<AppContainerProps> = ({ children, className }) => {
	return (
		<Box px={20} className={className}>
			{children}
		</Box>
	);
};

export default AppContainer;
