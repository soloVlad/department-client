import type { FC } from "react";
import { Table } from "@mantine/core";

import { BorderedTable, TitledSection } from "@/components";

import { SHORT_INFO } from "./ShortInfoTable.constants";

const ShortInfoTable: FC = () => {
	const rows = SHORT_INFO.map((element) => (
		<Table.Tr key={element.title}>
			<Table.Th>{element.title}</Table.Th>
			<Table.Td>{element.info}</Table.Td>
		</Table.Tr>
	));

	return (
		<TitledSection id="short-info" title="Краткая информация поступающим">
			<BorderedTable>
				<Table.Tbody>{rows}</Table.Tbody>
			</BorderedTable>
		</TitledSection>
	);
};

export default ShortInfoTable;
