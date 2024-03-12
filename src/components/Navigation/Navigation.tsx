import type { FC } from "react";
import { Group } from "@mantine/core";

import { AppNavLink } from "@/components";

import { NavigationItems } from "@/router/navigation";

const Navigation: FC = () => {
	return (
		<Group gap={30}>
			{NavigationItems.map((navItem) => (
				<AppNavLink href={navItem.href} label={navItem.label} />
			))}
		</Group>
	);
};

export default Navigation;
