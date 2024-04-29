import type { FC } from "react";
import { Center } from "@mantine/core";

import type { ProfessorFilterKey } from "@/resources/professor";

import classes from "./FilterOption.module.css";
import clsx from "clsx";

type FilterOptionProps = {
	label: string;
	filterKey: ProfessorFilterKey;
	activeFilter: ProfessorFilterKey;
	onClick: (filterKey: ProfessorFilterKey) => void;
};

const FilterOption: FC<FilterOptionProps> = ({
	label,
	filterKey,
	activeFilter,
	onClick,
}) => {
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

export default FilterOption;
