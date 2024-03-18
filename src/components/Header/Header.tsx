import type { FC } from "react";
import { useLocation } from "react-router-dom";
import { Box, Container } from "@mantine/core";
import clsx from "clsx";

import { Routes } from "@/router";

import { AppContainer, Logo, Navigation } from "@/components";

import classes from "./Header.module.css";

const Header: FC = () => {
	const location = useLocation();

	const isHomePage = location.pathname === Routes.HOME;

	return (
		<AppContainer
			className={clsx(classes.headerAppContainer, {
				[classes.headerAppContainerHomePage]: isHomePage,
			})}
		>
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
