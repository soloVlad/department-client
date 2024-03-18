import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "@/pages";

import { Routes } from "./routes";
import { MainLayout } from "./layouts";

const router = createBrowserRouter([
	{
		path: Routes.HOME,
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
]);

const Router = () => {
	return <RouterProvider router={router} />;
};

export { Router };
