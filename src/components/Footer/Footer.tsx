import type { FC } from "react";
import { Container, Text } from "@mantine/core";

import { Routes } from "@/router";

import { AppContainer, Logo } from "@/components";

import classes from "./Footer.module.css";

const Footer: FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<AppContainer className={classes.footerAppContainer}>
			<footer className={classes.footer}>
				<Container className={classes.footerContainer}>
					<Logo href={Routes.HOME} />

					<Text className={classes.copyright}>
						&copy;
						{` 1973 - ${currentYear} Сайт кафердры веб-технологий и компьютерного
						моделированния ММФ БГУ`}
					</Text>
				</Container>
			</footer>
		</AppContainer>
	);
};

export default Footer;
