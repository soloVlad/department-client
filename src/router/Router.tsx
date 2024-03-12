import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "@/pages";

import { Routes } from "./routes";

const router = createBrowserRouter([
	{
		path: Routes.HOME,
		element: <HomePage />,
	},
]);

const Router = () => {
	return <RouterProvider router={router} />;
};

export { Router };
