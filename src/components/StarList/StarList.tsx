import type { FC } from "react";
import { Image, List } from "@mantine/core";

import { StarIconUrl } from "@/assets/icons";

type StarListProps = {
	items: string[];
};

const StarList: FC<StarListProps> = ({ items }) => {
	return (
		<List spacing={24} icon={<Image w={26} src={StarIconUrl} />}>
			{items.map((item) => (
				<List.Item key={item}>{item}</List.Item>
			))}
		</List>
	);
};

export default StarList;
