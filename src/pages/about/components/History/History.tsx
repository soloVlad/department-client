import type { FC } from "react";
import { Text } from "@mantine/core";

import { TitledSection } from "@/components";

const History: FC = () => {
	return (
		<TitledSection id="history" title="История">
			<Text fz={18}>
				Кафедра была создана в сентябре 1973 года при поддержке Ректора
				БГУ, профессора Сикорского В., академика Крылова В. и декана
				математического факультета Гусака А. В связи с открытием целого ряда
				новых научных направлений, которые становятся все более популярными
				среди исследователей, в 2010 кафедра численных методов и
				программирования была переименована в кафедру веб-технологий и
				компьютерного моделирования. Первыми сотрудниками кафедры были
				Монастырный П., Шешко M., Демидович Н., Мастяница В., Плащинская А.,
				Радаева В., Азаров А., Листопад Г., Расолько Г., Черенкевич З. Позже к
				работе на кафедре присоединились Пальцев А., Феденко Н., Мелешко И.,
				Якименко Т. и др. С момента основания до 2002 года кафедру возглавлял
				профессор Петр Ильич Монастырный.
			</Text>
		</TitledSection>
	);
};

export default History;