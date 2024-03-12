import type { FC } from "react";
import { Container } from "@mantine/core";

import { Routes } from "@/router";

import { Logo, Navigation } from "@/components";

import classes from "./Header.module.css";

const Header: FC = () => {
	return (
		<header className={classes.header}>
			<Container className={classes.headerContainer}>
				<Logo className={classes.growable} href={Routes.HOME} />
				<Navigation />
				<div className={classes.growable} />
			</Container>
		</header>
	);
};

export default Header;
