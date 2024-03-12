import type { FC } from "react";
import { Group } from "@mantine/core";

import { NavigationItems } from "@/router";

import { AppNavLink } from "@/components";

import classes from "./Navigation.module.css";

const Navigation: FC = () => {
	return (
		<Group className={classes.navigation} gap={30}>
			{NavigationItems.map((navItem) => (
				<AppNavLink
					key={navItem.label}
					href={navItem.href}
					label={navItem.label}
				/>
			))}
		</Group>
	);
};

export default Navigation;
