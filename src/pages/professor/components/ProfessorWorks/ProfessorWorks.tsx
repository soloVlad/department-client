import type { FC } from "react";

import type { StudentWork } from "@/resources/professor";

import { BorderedSection } from "@/components";
import ProfessorWork from "../ProfessorWork/ProfessorWork";

type ProfessorWorksProps = {
	studentWorks: StudentWork[];
};

const ProfessorWorks: FC<ProfessorWorksProps> = ({ studentWorks }) => {
	return (
		<BorderedSection title="Курсовые и дипломные работы">
			{studentWorks.map((work) => (
				<ProfessorWork {...work} />
			))}
		</BorderedSection>
	);
};

export default ProfessorWorks;
