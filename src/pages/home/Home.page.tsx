import type { FC } from "react";
import { BackgroundImage, Container, Text, Title, rem } from "@mantine/core";

import { newApi } from "@/resources/new";
import { SectionContainer } from "@/components";

import { WelcomeBgImageUrl } from "@/assets/images";

import { NewsPreview } from "./components";

import classes from "./Home.module.css";

const HomePage: FC = () => {
	const { news } = newApi.useNews();

	return (
		<>
			<BackgroundImage
				className={classes.bgContainer}
				mih={820}
				px={40}
				src={WelcomeBgImageUrl}
			>
				<Container className={classes.welcomeContainer}>
					<Title order={1} maw={760}>
						Веб-технологии и компьютерное моделирование
					</Title>

					<Text mt={20} fw={400} fz={24} lh={rem(32.4)}>
						Сайт кафедры ММФ БГУ
					</Text>
				</Container>
			</BackgroundImage>

			<SectionContainer classNames={{ app: classes.newsContainer }}>
				<NewsPreview news={news} />
			</SectionContainer>
		</>
	);
};

export default HomePage;
