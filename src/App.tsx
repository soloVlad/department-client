import { MantineProvider } from "@mantine/core";

import { Router } from "@/router";
import { theme } from "@/theme";

import "@mantine/core/styles.css";

const App = () => {
	return (
		<MantineProvider theme={theme}>
			<Router />
		</MantineProvider>
	);
};

export default App;
