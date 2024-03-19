import type { FC } from "react";
import { Group, type MantineBreakpoint } from "@mantine/core";
import clsx from "clsx";

import { NavigationItems } from "@/router";

import { AppNavLink } from "@/components";

import classes from "./Navigation.module.css";

type NavigationProps = {
	inColumn?: boolean;
	visibleFrom?: MantineBreakpoint;
	classNames?: {
		navigation?: string;
		item?: string;
	};
	handleItemClick?: () => void;
};

const Navigation: FC<NavigationProps> = ({
	inColumn = false,
	visibleFrom,
	classNames,
	handleItemClick,
}) => {
	return (
		<Group
			className={clsx(classes.navigation, classNames?.navigation, {
				[classes.column]: inColumn,
			})}
			gap={inColumn ? 12 : 30}
			visibleFrom={visibleFrom}
		>
			{NavigationItems.map((navItem) => (
				<AppNavLink
					classNames={{ navLink: classNames?.item }}
					key={navItem.label}
					href={navItem.href}
					label={navItem.label}
					handleClick={handleItemClick}
				/>
			))}
		</Group>
	);
};

export default Navigation;
