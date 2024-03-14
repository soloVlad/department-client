import type { FC } from "react";
import { Group, Paper, Spoiler, Text, Title, rem } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconArrowRight, IconClock } from "@tabler/icons-react";

import { dateUtil } from "@/utils";
import { Routes } from "@/router";

import classes from "./NewsPreviewCard.module.css";

const newsPreviewInfo = {
	id: 1,
	title: "Придумаешь какой-то классный заголовок",
	description:
		"А вообще немного пожалуюсь тебе. Хочется поменять дизайн, потому что он выглядит скучно, как я уже говорила, но я не могу.",
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
				maxHeight={65}
				mt={20}
				mb={0}
				fz={14}
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
