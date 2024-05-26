import { Select } from "@mantine/core";

import classes from "./Select.module.css";

export default Select.extend({
	classNames: {
		wrapper: classes.wrapper,
		root: classes.root,
		input: classes.input,
		dropdown: classes.dropdown,
		options: classes.options,
		option: classes.option,
	},
});
