import type { FC } from "react";
import { Container } from "@mantine/core";

import { Header } from "@/components";

import classes from "./Home.module.css";

const HomePage: FC = () => {
	return (
		<>
			<Header />

			<main style={{ flex: 1 }}>
				<Container>Main</Container>
			</main>

			<footer>
				<Container>Footer</Container>
			</footer>
		</>
	);
};

export default HomePage;
