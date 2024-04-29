import type { FC } from "react";
import { Table } from "@mantine/core";

import { BorderedTable, TitledSection } from "@/components";

import { CAMPAIGN_DATA } from "./Campaign.constants";

import classes from "./Campaign.module.css";

const Campaign: FC = () => {
	return (
		<TitledSection id="campaign" title="Приемная компания 2024" mt={80}>
			<BorderedTable classNames={{ td: classes.td, th: classes.th }}>
				<Table.Tr>
					<Table.Th>Профлизации</Table.Th>
					<Table.Th>Бюджетная форма</Table.Th>
					<Table.Th>Платная форма</Table.Th>
				</Table.Tr>

				<Table.Tr>
					<Table.Th colSpan={3}>Дневное отделение</Table.Th>
				</Table.Tr>

				{CAMPAIGN_DATA.fullTime.map((item) => {
					const CellContainer = item.isHeader ? Table.Th : Table.Td;

					return (
						<Table.Tr key={item.name}>
							<CellContainer className={classes.nameCell}>
								{item.name}
							</CellContainer>
							<CellContainer>{item.budget}</CellContainer>
							<CellContainer>{item.nonBudget}</CellContainer>
						</Table.Tr>
					);
				})}

				<Table.Tr>
					<Table.Th colSpan={3}>Заочное отделение</Table.Th>
				</Table.Tr>

				{CAMPAIGN_DATA.partTime.map((item) => (
					<Table.Tr key={item.name} className={classes.lastTr}>
						<Table.Th className={classes.nameCell}>{item.name}</Table.Th>
						<Table.Th>{item.budget}</Table.Th>
						<Table.Th>{item.nonBudget}</Table.Th>
					</Table.Tr>
				))}
			</BorderedTable>
		</TitledSection>
	);
};

export default Campaign;
