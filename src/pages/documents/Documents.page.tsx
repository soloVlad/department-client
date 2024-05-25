import { type FC, useMemo } from "react";
import { Box, Stack } from "@mantine/core";
import capitalize from "lodash.capitalize";
import groupBy from "lodash.groupby";

import { documentApi } from "@/resources/documents";

import { SectionContainer, TableOfContent, TitledSection } from "@/components";

import { DocumentLink } from "./components";

import classes from "./Documents.module.css";

const DocumentsPage: FC = () => {
	const { categories } = documentApi.useDocumentCategories();
	const { documents } = documentApi.useDocuments();

	const documentsByCategoryKey = useMemo(() => {
		return groupBy(documents, (document) => document.category.key);
	}, [documents]);

	const content = useMemo(() => {
		return categories
			.map((category) => ({
				label: capitalize(category.attributes.category),
				id: category.attributes.key,
				order: 1,
			}))
			.filter((item) => documentsByCategoryKey[item.id]);
	}, [categories, documentsByCategoryKey]);

	return (
		<SectionContainer classNames={{ section: classes.section }}>
			<Box>
				{content.map((item, index) => {
					if (!documentsByCategoryKey[item.id]) return;

					return (
						<TitledSection
							key={item.id}
							id={item.id}
							title={item.label}
							mt={index === 0 ? 0 : 40}
						>
							<Stack className={classes.documentsWrapper}>
								{documentsByCategoryKey[item.id]?.map((document) => (
									<DocumentLink
										key={document.file.url}
										name={document.name}
										url={document.file.url}
										ext={document.file.ext}
									/>
								))}
							</Stack>
						</TitledSection>
					);
				})}
			</Box>

			<TableOfContent className={classes.tableOfContent} items={content} />
		</SectionContainer>
	);
};

export default DocumentsPage;
