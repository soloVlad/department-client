import type { FC } from "react";

import { StarList, TitledSection } from "@/components";

const ResearchAreas: FC = () => {
	return (
		<TitledSection mt={80} title="Научные направления">
			<StarList
				items={[
					"Численные и аналитические методы решения граничных и краевых задач для сеточных, дифференциальных и интегральных уравнений;",
					"Моделирование сложных систем",
					"Информационные и Web-технологии",
				]}
			/>
		</TitledSection>
	);
};

export default ResearchAreas;
