import type { FC } from "react";
import { Group, Paper, Spoiler, Text, Title, rem } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconArrowRight, IconClock } from "@tabler/icons-react";

import { dateUtil } from "@/utils";
import { Routes } from "@/router";

import classes from "./NewsPreviewCard.module.css";

type NewsPreviewCardProps = {
	id: number;
	createdDate: string;
	title: string;
	description: string;
};

const NewsPreviewCard: FC<NewsPreviewCardProps> = ({
	id,
	createdDate,
	title,
	description,
}) => {
	const navigate = useNavigate();

	const iconSize = 26;
	const date = dateUtil.formatDateDDMMYYYY(new Date(createdDate));

	const handleCardClick = () => {
		navigate(`${Routes.NEWS}/${id}`);
	};

	return (
		<Paper className={classes.card} py={40} px={30} onClick={handleCardClick}>
			<Title order={3} mih="2lh">
				{title}
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
				{description}
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
