import { Accordion, Image } from "@mantine/core";

import { AddCircleUrl } from "@/assets/icons";

import classes from "./Accordion.module.css";

export default Accordion.extend({
	defaultProps: {
		chevron: <Image w={36} src={AddCircleUrl} />,
	},
	classNames: {
		root: classes.root,
		item: classes.item,
		control: classes.control,
		label: classes.label,
		content: classes.content,
		chevron: classes.chevron,
	},
});
