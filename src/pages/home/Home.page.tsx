import type { FC } from "react";
import { BackgroundImage, Container, Text, Title, rem } from "@mantine/core";

import { SectionContainer } from "@/components";

import { WelcomeBgImageUrl } from "@/assets/images";

import { NewsPreview } from "./components";

import classes from "./Home.module.css";

const HomePage: FC = () => {
	return (
		<>
			<BackgroundImage
				className={classes.bgContainer}
				mih={670}
				src={WelcomeBgImageUrl}
			>
				<Container className={classes.welcomeContainer}>
					<Title order={1} maw={750}>
						Веб-технологии и компьютерное моделирование
					</Title>

					<Text mt={20} fw={400} fz={24} lh={rem(32.4)}>
						Сайт кафедры ММФ БГУ
					</Text>
				</Container>
			</BackgroundImage>

			<SectionContainer>
				<NewsPreview />
			</SectionContainer>
		</>
	);
};

export default HomePage;
