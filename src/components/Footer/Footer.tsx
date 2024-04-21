import type { FC } from "react";
import { Container, Text } from "@mantine/core";

import { Routes } from "@/router";

import { AppContainer, Logo } from "@/components";

import classes from "./Footer.module.css";

const Footer: FC = () => {
	return (
		<AppContainer className={classes.footerAppContainer}>
			<footer className={classes.footer}>
				<Container className={classes.footerContainer}>
					<Logo href={Routes.HOME} />

					<Text className={classes.copyright}>
						&copy; 1973 - 2024 Сайт кафердры веб-технологий и компьютерного
						моделированния ММФ БГУ
					</Text>
				</Container>
			</footer>
		</AppContainer>
	);
};

export default Footer;
