import { useState, type FC, type MouseEvent } from "react";
import { Box, Paper, Text, rem } from "@mantine/core";
import clsx from "clsx";

import type { TableOfContentItem } from "@/types";

import classes from "./TableOfContent.module.css";

type TableOfContentProps = {
	items: TableOfContentItem[];
	className?: string;
};

const TableOfContent: FC<TableOfContentProps> = ({ items, className }) => {
	const [active, setActive] = useState(0);

	const handleLinkClick = (
		event: MouseEvent<HTMLAnchorElement>,
		activeIndex: number,
	) => {
		event.preventDefault();
		setActive(activeIndex);

		const item = items.find((_, index) => index === activeIndex);

		if (item) {
			const activeElement = document.getElementById(item.id);

			activeElement?.scrollIntoView();
		}
	};

	const list = items.map((item, index) => (
		<Box<"a">
			component="a"
			key={item.label}
			href={`#${item.id}`}
			className={clsx(classes.link, {
				[classes.linkActive]: active === index,
			})}
			style={{
				paddingLeft: `calc(${item.order} * ${rem(26)}`,
			}}
			onClick={(event) => handleLinkClick(event, index)}
		>
			{item.label}
		</Box>
	));

	return (
		<Paper
			className={clsx(classes.wrapper, className)}
			mih={200}
			h="fit-content"
			px={10}
			py={30}
		>
			<Text mb={16} px={30} fw={600} fz={20} lh={rem(24)}>
				Содержание
			</Text>

			{list}
		</Paper>
	);
};

export default TableOfContent;
