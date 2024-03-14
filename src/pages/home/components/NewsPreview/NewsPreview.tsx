import type { FC } from "react";
import { SimpleGrid, Title } from "@mantine/core";

import { NewsPreviewCard } from "..";

const NewsPreview: FC = () => {
	return (
		<>
			<Title order={2}>Последние новости</Title>

			<SimpleGrid mt={36} cols={{ sm: 2, lg: 3 }} spacing={30}>
				<NewsPreviewCard />
				<NewsPreviewCard />
				<NewsPreviewCard />

				<NewsPreviewCard />
				<NewsPreviewCard />
				<NewsPreviewCard />
			</SimpleGrid>
		</>
	);
};

export default NewsPreview;
