import type { FC } from "react";
import { useParams } from "react-router-dom";

import { newApi } from "@/resources/new";

import {
	MarkdownRenderer,
	SectionContainer,
	TitledSection,
} from "@/components";

import classes from "./NewsPiece.module.css";

const NewsPiecePage: FC = () => {
	const { id } = useParams();

	const { newsPiece } = newApi.useNewsPiece(id);

	return (
		<SectionContainer classNames={{ section: classes.section }}>
			{newsPiece && (
				<TitledSection title={newsPiece.title} mb={80}>
					<MarkdownRenderer content={newsPiece.content} />
				</TitledSection>
			)}
		</SectionContainer>
	);
};

export default NewsPiecePage;
