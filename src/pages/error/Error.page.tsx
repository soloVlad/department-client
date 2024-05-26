import type { FC } from "react";
import { Flex, Stack, Text, Title } from "@mantine/core";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage: FC = () => {
	const error = useRouteError();

	let errorText = "";

	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			errorText = "Кажется мы потеряли эту страничку на кафедре";
		} else {
			errorText = error.statusText;
		}
	}

	return (
		<>
			<Flex h="100vh" justify="center">
				<Stack mt="30vh" px={20} maw={500}>
					<Title order={2}>Упс</Title>
					<Text fz={18}>{errorText}</Text>
				</Stack>
			</Flex>
		</>
	);
};

export default ErrorPage;
