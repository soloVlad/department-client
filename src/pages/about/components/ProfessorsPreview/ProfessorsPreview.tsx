import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, SimpleGrid, Stack } from "@mantine/core";

import { Routes } from "@/router";

import { ProfessorCard, TitledSection } from "@/components";

import classes from "./ProfessorsPreview.module.css";

const ProfessorsPreview: FC = () => {
	const navigate = useNavigate();

	const handleSeeAllClick = () => {
		navigate(Routes.PROFESSORS);
	};

	return (
		<TitledSection mt={80} title="Преподавательский состав">
			<Stack gap={30}>
				<SimpleGrid cols={{ base: 1, xs: 2, md: 3, lg: 4 }} spacing={30}>
					<ProfessorCard />
					<ProfessorCard />
					<ProfessorCard />
					<ProfessorCard />
					<ProfessorCard />
					<ProfessorCard />
					<ProfessorCard />
					<ProfessorCard />
				</SimpleGrid>

				<Button
					className={classes.button}
					variant="outline"
					onClick={handleSeeAllClick}
				>
					Смотреть всех
				</Button>
			</Stack>
		</TitledSection>
	);
};

export default ProfessorsPreview;
