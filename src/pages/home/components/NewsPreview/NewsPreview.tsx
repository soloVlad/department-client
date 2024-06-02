import type { FC } from "react";
import { SimpleGrid, Title } from "@mantine/core";

import type { New } from "@/resources/new";

import { NewsPreviewCard } from "..";

type NewsPreviewProps = {
	news: New[];
};

const NewsPreview: FC<NewsPreviewProps> = ({ news }) => {
	return (
		<>
			<Title order={2}>Последние новости</Title>

			<SimpleGrid mt={36} cols={{ sm: 2, lg: 3 }} spacing={30}>
				{news.map((newsPiece) => (
					<NewsPreviewCard
						key={newsPiece.id}
						id={newsPiece.id}
						createdDate={newsPiece.createdAt}
						title={newsPiece.title}
						description={newsPiece.shortDescription}
					/>
				))}
			</SimpleGrid>
		</>
	);
};

export default NewsPreview;
