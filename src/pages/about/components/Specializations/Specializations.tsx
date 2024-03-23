import type { FC } from "react";

import { StarList, TitledSection } from "@/components";

const Specializations: FC = () => {
	return (
		<TitledSection id="specializations" mt={40} title="Специализации">
			<StarList
				items={[
					"Web-программирование и Internet-технологии",
					"Вычислительная математика",
					"Информатика и компьютерные приложения",
				]}
			/>
		</TitledSection>
	);
};

export default Specializations;
