import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorPage, HomePage } from "@/pages";

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
		],
	},
]);

const Router = () => {
	return <RouterProvider router={router} />;
};

export { Router };
