import type { FC } from "react";
import { Container } from "@mantine/core";

import { Logo } from "@/components";

import classes from "./Home.module.css";

const HomePage: FC = () => {
	return (
		<>
			<header>
				<Container>
					Header
					<Logo />
				</Container>
			</header>

			<main>
				<Container>Main</Container>
			</main>

			<footer>
				<Container>Footer</Container>
			</footer>
		</>
	);
};

export default HomePage;
