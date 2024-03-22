import type { FC } from "react";
import { Link } from "react-router-dom";
import { Image, Stack, Text, Title, rem } from "@mantine/core";

import { ProfessorExampleImageUrl } from "@/assets/images";

import classes from "./ProfessorCard.module.css";

type ProfessorCardProps = {
	imageUrl?: string;
	fullName?: string;
	status?: string;
};

const ProfessorCard: FC<ProfessorCardProps> = ({
	imageUrl = ProfessorExampleImageUrl,
	fullName = "Волков В.М.",
	status = "Профессор",
}) => {
	return (
		<Link className={classes.link} to="#">
			<Stack gap={7}>
				<Image className={classes.image} src={imageUrl} />

				<Title order={4}>{fullName}</Title>

				<Text c="gray-blue.5" lh={rem(19.2)}>
					{status}
				</Text>
			</Stack>
		</Link>
	);
};

export default ProfessorCard;
