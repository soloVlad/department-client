import { createTheme, rem } from "@mantine/core";

import * as components from "./components";

export const theme = createTheme({
	fontFamily: "Proxima Nova, sans-serif",
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
	black: "#1C1C1C",
	headings: {
		sizes: {
			h1: { fontSize: rem(48), fontWeight: "700", lineHeight: rem(64.8) },
			h2: { fontSize: rem(36), fontWeight: "600", lineHeight: rem(43.2) },
			h3: { fontSize: rem(24), fontWeight: "600", lineHeight: rem(28.8) },
			h4: { fontSize: rem(18), fontWeight: "400", lineHeight: rem(24.3) },
			h5: { fontSize: rem(18), fontWeight: "600", lineHeight: rem(25.2) },
			h6: { fontSize: rem(18), fontWeight: "400", lineHeight: rem(27) },
		},
	},
	components,
});
