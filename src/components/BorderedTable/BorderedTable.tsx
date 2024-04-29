import type { FC, PropsWithChildren } from "react";
import { Paper, Table } from "@mantine/core";

import classes from "./BorderedTable.module.css";

type BorderedTableProps = PropsWithChildren & {
	classNames?: {
		th?: string;
		td?: string;
	};
};

const BorderedTable: FC<BorderedTableProps> = ({ children, classNames }) => {
	return (
		<Paper className={classes.wrapper} withBorder>
			<Table classNames={classNames}>{children}</Table>
		</Paper>
	);
};

export default BorderedTable;
