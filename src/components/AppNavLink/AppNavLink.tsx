import type { FC } from "react";
import { Anchor } from "@mantine/core";
import { NavLink } from "react-router-dom";
import cx from "clsx";

import classes from "./AppNavLink.module.css";

type AppNavLinkProps = {
	href: string;
	label: string;
	classNames?: {
		navLink?: string;
	};
	handleClick?: () => void;
};

const AppNavLink: FC<AppNavLinkProps> = ({
	href,
	label,
	classNames,
	handleClick,
}) => {
	return (
		<Anchor
			className={cx(classes.navLink, classNames?.navLink)}
			renderRoot={({ className, ...others }) => (
				<NavLink
					className={({ isActive }) =>
						cx(className, { [classes.active]: isActive })
					}
					to={href}
					{...others}
				/>
			)}
			onClick={handleClick}
		>
			{label}
		</Anchor>
	);
};

export default AppNavLink;
