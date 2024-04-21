import type { FC } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "@/components";

import classes from "./main.module.css";

const MainLayout: FC = () => {
	return (
		<>
			<Header />

			<main className={classes.main}>
				<Outlet />
			</main>

			<Footer />
		</>
	);
};

export default MainLayout;
