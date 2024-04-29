import { useState, type FC } from "react";
import { Group, SimpleGrid, Stack } from "@mantine/core";

import type { ProfessorFilterKey } from "@/resources/professor";
import {
	CheckButton,
	ProfessorCard,
	SectionContainer,
	TitledSection,
} from "@/components";

import { FILTERS } from "./Professors.constants";

import classes from "./Professors.module.css";

const ProfessorsPage: FC = () => {
	const [activeFilter, setActiveFilter] = useState<ProfessorFilterKey>(null);

	const handleFilterChange = (filterKey: ProfessorFilterKey) => {
		setActiveFilter(filterKey);
	};

	return (
		<SectionContainer classNames={{ section: classes.section }}>
			<TitledSection title="Преподаватели" mb={85}>
				<Stack gap={35}>
					<Group gap={10}>
						{FILTERS.map((filter) => (
							<CheckButton<ProfessorFilterKey>
								key={filter.label}
								label={filter.label}
								filterKey={filter.filterKey}
								activeFilter={activeFilter}
								onClick={handleFilterChange}
							/>
						))}
					</Group>

					<SimpleGrid
						cols={{ base: 1, xs: 3, sm: 4, md: 5, lg: 6 }}
						spacing={30}
					>
						<ProfessorCard />
						<ProfessorCard />
						<ProfessorCard />
						<ProfessorCard />
						<ProfessorCard />
						<ProfessorCard />
						<ProfessorCard />
						<ProfessorCard />
						<ProfessorCard />
					</SimpleGrid>
				</Stack>
			</TitledSection>
		</SectionContainer>
	);
};

export default ProfessorsPage;
