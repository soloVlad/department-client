import type { FC } from "react";
import { Link } from "react-router-dom";
import { Group, Stack, Text, Title } from "@mantine/core";

import { dateUtil } from "@/utils";

import classes from "./NewBox.module.css";

type NewBoxProps = {
	id: number;
	title: string;
	category: string;
	createdAt: string;
	shortDescription: string;
	coverImageUrl?: string;
};

const NewBox: FC<NewBoxProps> = ({
	id,
	title,
	category,
	createdAt,
	shortDescription,
	coverImageUrl,
}) => {
	return (
		<Link className={classes.link} to={`/news/${id}`}>
			<Stack className={classes.wrapper} gap={10}>
				{coverImageUrl && (
					<img className={classes.image} src={coverImageUrl} alt={title} />
				)}

				<Group>
					<Text className={classes.category}>{category}</Text>

					<Text className={classes.date}>
						{dateUtil.formatDateDDMMYYYY(new Date(createdAt))}
					</Text>
				</Group>

				<Title className={classes.title} order={3}>
					{title}
				</Title>

				<Text className={classes.description}>{shortDescription}</Text>
			</Stack>
		</Link>
	);
};

export default NewBox;
