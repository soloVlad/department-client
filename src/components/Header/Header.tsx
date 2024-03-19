import { useState, type FC } from "react";
import { useLocation } from "react-router-dom";
import { Box, Burger, Container, Menu } from "@mantine/core";
import clsx from "clsx";

import { Routes } from "@/router";

import { AppContainer, Logo, Navigation } from "@/components";

import classes from "./Header.module.css";

const Header: FC = () => {
	const location = useLocation();
	const [opened, setOpened] = useState(false);

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

					<Navigation visibleFrom="md" />

					<Menu position="bottom-end" opened={opened} onChange={setOpened}>
						<Menu.Target>
							<Burger color="gray-blue.0" hiddenFrom="md" opened={opened} />
						</Menu.Target>

						<Menu.Dropdown hiddenFrom="md" miw={240}>
							<Navigation
								classNames={{ item: classes.menuItem }}
								inColumn={true}
							/>
						</Menu.Dropdown>
					</Menu>

					<Box visibleFrom="lg" className={classes.growable} />
				</Container>
			</header>
		</AppContainer>
	);
};

export default Header;
