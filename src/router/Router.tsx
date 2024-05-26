import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
	AboutPage,
	Applicants,
	ContactsPage,
	DocumentsPage,
	ErrorPage,
	HomePage,
	NewsPage,
	ProfessorPage,
	ProfessorsPage,
	StudyPage,
} from "@/pages";

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
			{
				path: Routes.APPLICANTS,
				element: <Applicants />,
			},
			{
				path: Routes.PROFESSORS,
				element: <ProfessorsPage />,
			},
			{
				path: `${Routes.PROFESSORS}/:id`,
				element: <ProfessorPage />,
			},
			{
				path: Routes.STUDY,
				element: <StudyPage />,
			},
			{
				path: Routes.NEWS,
				element: <NewsPage />,
			},
			{
				path: Routes.DOCS,
				element: <DocumentsPage />,
			},
			{
				path: Routes.CONTACTS,
				element: <ContactsPage />,
			},
		],
	},
]);

const Router = () => {
	return <RouterProvider router={router} />;
};

export { Router };
