import type { FC } from "react";
import { Box, Container } from "@mantine/core";

import { Routes } from "@/router";

import { AppContainer, Logo, Navigation } from "@/components";

import classes from "./Header.module.css";

const Header: FC = () => {
	return (
		<AppContainer className={classes.headerAppContainer}>
			<header className={classes.header}>
				<Container className={classes.headerContainer}>
					<Logo className={classes.growable} href={Routes.HOME} />
					<Navigation />
					<Box visibleFrom="lg" className={classes.growable} />
				</Container>
			</header>
		</AppContainer>
	);
};

export default Header;
