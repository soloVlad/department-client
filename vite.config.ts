import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import biomePlugin from "vite-plugin-biome";

export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		biomePlugin({
			mode: "format",
			applyFixes: true,
		}),
	],
});
