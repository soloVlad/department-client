import type { FC } from "react";
import { Link } from "react-router-dom";
import { Text, useMantineTheme } from "@mantine/core";

import { documentsUI } from "@/ui-helpers";
import type { Document } from "@/resources/documents";

import classes from "./DocumentLink.module.css";

type DocumentProps = {
	name: Document["name"];
	url: Document["file"]["url"];
	ext: Document["file"]["ext"];
};

const DocumentLink: FC<DocumentProps> = ({ name, url, ext }) => {
	const theme = useMantineTheme();

	const Icon = documentsUI.getDocumentIconByExt(ext);

	return (
		<Link to={url} target="_blank" className={classes.wrapper}>
			<Icon
				className={classes.icon}
				size={26}
				color={theme.colors["gray-blue"][5]}
			/>

			<Text className={classes.text}>{name}</Text>
		</Link>
	);
};

export default DocumentLink;
