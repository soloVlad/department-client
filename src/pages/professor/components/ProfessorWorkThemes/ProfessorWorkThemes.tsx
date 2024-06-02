import type { FC } from "react";

import type { WorkTheme } from "@/resources/professor";
import { BorderedSection, StarList } from "@/components";
import { Box } from "@mantine/core";

type ProfessorWorkThemesProps = {
	workThemes: WorkTheme[];
};

const ProfessorWorkThemes: FC<ProfessorWorkThemesProps> = ({ workThemes }) => {
	return (
		<BorderedSection title="Примерные темы работ">
			<Box py={20} px={20}>
				<StarList gap={16} items={workThemes.map((theme) => theme.name)} />
			</Box>
		</BorderedSection>
	);
};

export default ProfessorWorkThemes;
