import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
	AboutPage,
	Applicants,
	ErrorPage,
	HomePage,
	ProfessorsPage,
	StudyPage,
} from "@/pages";

import { Routes } from "./routes";
import { MainLayout } from "./layouts";
import ContactsPage from "@/pages/contacts/Contacts.page";

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
				path: Routes.STUDY,
				element: <StudyPage />,
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
