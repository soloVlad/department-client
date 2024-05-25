import type { FC } from "react";
import { Link } from "react-router-dom";
import { Group, Text, useMantineTheme } from "@mantine/core";
import type { TablerIconsProps } from "@tabler/icons-react";

import classes from "./ProfessorInfoContact.module.css";

type ProfessorInfoContactProps = {
	Icon: (props: TablerIconsProps) => JSX.Element;
	text: string;
	type: string;
};

const ProfessorInfoContact: FC<ProfessorInfoContactProps> = ({
	Icon,
	text,
	type,
}) => {
	const theme = useMantineTheme();

	return (
		<Link className={classes.link} to={calcHref(text, type)}>
			<Group gap={10} wrap="nowrap">
				<Icon
					className={classes.image}
					size={24}
					color={theme.colors["gray-blue"][5]}
				/>

				<Text c="gray-blue.5">{text}</Text>
			</Group>
		</Link>
	);
};

export default ProfessorInfoContact;

function calcHref(text: string, type: string) {
	if (type === "phone") {
		return `tel:${text}`;
	}

	if (type === "email") {
		return `mailto:${text}`;
	}

	return "#";
}
