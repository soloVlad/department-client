import type { FC } from "react";
import { Stack } from "@mantine/core";

import { newApi } from "@/resources/new";
import { SectionContainer, TitledSection } from "@/components";

import { NewBox } from "./components";

import classes from "./News.module.css";

const NewsPage: FC = () => {
	const { news } = newApi.useNews();

	return (
		<SectionContainer classNames={{ section: classes.section }}>
			<TitledSection title="Новости">
				<Stack gap={30}>
					{news.map((newsPiece) => (
						<NewBox {...newsPiece} />
					))}
				</Stack>
			</TitledSection>
		</SectionContainer>
	);
};

export default NewsPage;
