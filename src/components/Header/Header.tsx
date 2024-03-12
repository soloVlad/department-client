import type { FC } from "react";
import { Container } from "@mantine/core";

import { Logo, Navigation } from "@/components";

import classes from "./Header.module.css";

const Header: FC = () => {
	return (
		<header className={classes.header}>
			<Container className={classes.headerContainer}>
				<Logo className={classes.growable} />
				<Navigation />
				<div className={classes.growable} />
			</Container>
		</header>
	);
};

export default Header;
