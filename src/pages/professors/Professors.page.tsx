import { useState, type FC, useEffect } from "react";
import { Group, SimpleGrid, Stack } from "@mantine/core";

import { imageUtil, nameUtil } from "@/utils";

import {
	type Professor,
	professorApi,
	type ProfessorFilterKey,
} from "@/resources/professor";

import {
	CheckButton,
	ProfessorCard,
	SectionContainer,
	TitledSection,
} from "@/components";

import type { CommonEntity } from "@/types";

import { FILTERS } from "./Professors.constants";

import classes from "./Professors.module.css";

const ProfessorsPage: FC = () => {
	const [activeFilter, setActiveFilter] = useState<ProfessorFilterKey>(null);

	const [filteredProfessors, setFilteredProfessor] = useState<
		CommonEntity<Professor>[]
	>([]);

	const { professors } = professorApi.useProfessors();

	const handleFilterChange = (filterKey: ProfessorFilterKey) => {
		setActiveFilter(filterKey);
	};

	useEffect(() => {
		if (!activeFilter) {
			setFilteredProfessor(professors);
			return;
		}

		if (activeFilter === "retired") {
			const retiredProfessors = professors.filter(
				(professor) => professor.attributes.isRetired,
			);

			setFilteredProfessor(retiredProfessors);
			return;
		}

		const professorWithNeededDegree = professors.filter(
			(professor) =>
				professor.attributes.degree.data.attributes.name === activeFilter,
		);

		setFilteredProfessor(professorWithNeededDegree);
	}, [professors, activeFilter]);

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
						{filteredProfessors.map((professor) => {
							const { firstName, secondName, middleName, degree, avatar } =
								professor.attributes;

							const fullName = nameUtil.calcShortFullName(
								firstName,
								secondName,
								middleName,
							);

							const avatarUrl = imageUtil.getFullImageUrl(
								avatar.data.attributes.url,
							);

							return (
								<ProfessorCard
									key={professor.id}
									fullName={fullName}
									status={degree.data.attributes.name}
									imageUrl={avatarUrl}
								/>
							);
						})}
					</SimpleGrid>
				</Stack>
			</TitledSection>
		</SectionContainer>
	);
};

export default ProfessorsPage;
