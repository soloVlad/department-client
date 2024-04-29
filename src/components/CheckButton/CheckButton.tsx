import { Center } from "@mantine/core";
import clsx from "clsx";

import classes from "./CheckButton.module.css";

type CheckButtonProps<T> = {
	label: string;
	filterKey: T;
	activeFilter: T;
	onClick: (filterKey: T) => void;
};

const CheckButton = <T,>({
	label,
	filterKey,
	activeFilter,
	onClick,
}: CheckButtonProps<T>) => {
	return (
		<Center
			className={clsx(classes.option, {
				[classes.activeOption]: activeFilter === filterKey,
			})}
			onClick={() => onClick(filterKey)}
		>
			{label}
		</Center>
	);
};

export default CheckButton;
