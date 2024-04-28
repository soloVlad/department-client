import type { FC, PropsWithChildren } from "react";
import { Paper, Table } from "@mantine/core";

import classes from "./BorderedTable.module.css";

const BorderedTable: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Paper className={classes.wrapper} withBorder>
			<Table>{children}</Table>
		</Paper>
	);
};

export default BorderedTable;
