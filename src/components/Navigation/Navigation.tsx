import type { FC } from "react";
import { Group } from "@mantine/core";

import { NavigationItems } from "@/router";

import { AppNavLink } from "@/components";

const Navigation: FC = () => {
	return (
		<Group gap={30}>
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
