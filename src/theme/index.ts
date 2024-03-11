import { createTheme } from "@mantine/core";

import * as components from "./components";

export const theme = createTheme({
	fontFamilyMonospace: "Roboto Mono, monospace",
	colors: {
		"gray-blue": [
			"#FFFFFF",
			"#F4F6F7",
			"#E3E8EA",
			"#C9D3D8",
			"#A4B4BC",
			"#778D99",
			"#5C727F",
			"#4F606B",
			"#44505A",
			"#1C1C1C",
		],
	},
	components,
});
