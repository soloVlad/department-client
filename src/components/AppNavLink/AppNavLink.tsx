import type { FC } from "react";
import { Anchor } from "@mantine/core";
import { NavLink } from "react-router-dom";
import cx from "clsx";

import classes from "./AppNavLink.module.css";

type AppNavLinkProps = {
	href: string;
	label: string;
};

const AppNavLink: FC<AppNavLinkProps> = ({ href, label }) => {
	return (
		<Anchor
			className={classes.navLink}
			renderRoot={({ className, ...others }) => (
				<NavLink
					className={({ isActive }) =>
						cx(className, { "active-class": isActive })
					}
					to={href}
					{...others}
				/>
			)}
		>
			{label}
		</Anchor>
	);
};

export default AppNavLink;
