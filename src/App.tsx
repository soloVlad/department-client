import "@mantine/core/styles.css";
import "./App.css";

import { MantineProvider } from "@mantine/core";

import { Router } from "@/router";
import { theme } from "@/theme";

const App = () => {
	return (
		<MantineProvider theme={theme}>
			<Router />
		</MantineProvider>
	);
};

export default App;
