import { MantineProvider } from "@mantine/core";

import { theme } from "@/theme";

import "@mantine/core/styles.css";

const App = () => {
	return (
		<MantineProvider theme={theme}>
			<div>app</div>
		</MantineProvider>
	);
};

export default App;
