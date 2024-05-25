import type { FC } from "react";
import { Link } from "react-router-dom";
import { Image, Stack, Text, Title, rem } from "@mantine/core";

import classes from "./ProfessorCard.module.css";

type ProfessorCardProps = {
	id: number;
	imageUrl: string;
	fullName: string;
	status: string;
};

const ProfessorCard: FC<ProfessorCardProps> = ({
	id,
	imageUrl,
	fullName,
	status,
}) => {
	return (
		<Link className={classes.link} to={`/professors/${id}`}>
			<Stack gap={7} h="100%">
				<Image className={classes.image} src={imageUrl} mih={230} fit="cover" />

				<Title order={4}>{fullName}</Title>

				<Text c="gray-blue.5" lh={rem(19.2)}>
					{status}
				</Text>
			</Stack>
		</Link>
	);
};

export default ProfessorCard;
