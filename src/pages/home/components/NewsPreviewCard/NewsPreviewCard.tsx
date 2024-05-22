import type { FC } from "react";
import { Group, Paper, Spoiler, Text, Title, rem } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconArrowRight, IconClock } from "@tabler/icons-react";

import { dateUtil } from "@/utils";
import { Routes } from "@/router";

import classes from "./NewsPreviewCard.module.css";

const newsPreviewInfo = {
	id: 1,
	title: "Какой-то интересный заголовок",
	description:
		"Здесь идёт какое-то краткое описание повествуемой темы, оно относительно небольшое по задумке.",
	date: new Date(),
};

const NewsPreviewCard: FC = () => {
	const navigate = useNavigate();

	const iconSize = 26;
	const date = dateUtil.formatDateDDMMYYYY(newsPreviewInfo.date);

	const handleCardClick = () => {
		navigate(`${Routes.NEWS}/${newsPreviewInfo.id}`);
	};

	return (
		<Paper className={classes.card} py={40} px={30} onClick={handleCardClick}>
			<Title order={3} mih="2lh">
				{newsPreviewInfo.title}
			</Title>

			<Spoiler
				classNames={{
					content: classes.spoilerContent,
				}}
				maxHeight={57}
				mt={20}
				mb={0}
				fz={14}
				lh={rem(18.9)}
				showLabel="Развернуть"
				hideLabel="Свернуть"
				onClick={(event) => event.stopPropagation()}
			>
				{newsPreviewInfo.description}
				{newsPreviewInfo.description}
			</Spoiler>

			<Group mt={45} justify="space-between" c="gray-blue.4">
				<Group gap={10}>
					<IconClock size={iconSize} />

					<Text fz={18} lh={rem(24.3)}>
						{date}
					</Text>
				</Group>

				<IconArrowRight size={iconSize} />
			</Group>
		</Paper>
	);
};

export default NewsPreviewCard;
