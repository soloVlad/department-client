import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AboutPage, ErrorPage, HomePage } from "@/pages";

import { Routes } from "./routes";
import { MainLayout } from "./layouts";

const router = createBrowserRouter([
	{
		path: Routes.HOME,
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: Routes.ABOUT,
				element: <AboutPage />,
			},
		],
	},
]);

const Router = () => {
	return <RouterProvider router={router} />;
};

export { Router };
