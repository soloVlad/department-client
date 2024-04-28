import { Table } from "@mantine/core";

import classes from "./Table.module.css";

export default Table.extend({
	defaultProps: {
		borderColor: "gray-blue.4",
		withColumnBorders: true,
		withRowBorders: true,
	},
	classNames: {
		table: classes.table,
		td: classes.td,
		th: classes.th,
	},
});
