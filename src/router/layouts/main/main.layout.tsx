import type { FC } from "react";
import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

import { Header } from "@/components";

import classes from "./main.module.css";

const MainLayout: FC = () => {
	return (
		<>
			<Header />

			<main className={classes.main}>
				<Outlet />
			</main>

			<footer>
				<Container>Footer</Container>
			</footer>
		</>
	);
};

export default MainLayout;
