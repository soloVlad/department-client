import "@mantine/core/styles.css";
import "@/assets/fonts/ProximaNova/ProximaNova.css";
import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";

import { Router } from "@/router";
import { theme } from "@/theme";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider theme={theme}>
				<Router />
			</MantineProvider>
		</QueryClientProvider>
	);
};

export default App;
