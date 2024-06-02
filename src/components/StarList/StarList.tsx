import type { FC } from "react";
import { Image, List } from "@mantine/core";

import { StarIconUrl } from "@/assets/icons";

type StarListProps = {
	items: string[];
	gap?: number;
};

const StarList: FC<StarListProps> = ({ items, gap = 24 }) => {
	return (
		<List spacing={gap} icon={<Image w={26} src={StarIconUrl} />}>
			{items.map((item) => (
				<List.Item key={item}>{item}</List.Item>
			))}
		</List>
	);
};

export default StarList;
