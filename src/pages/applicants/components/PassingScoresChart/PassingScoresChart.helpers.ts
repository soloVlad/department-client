import type { SPECIALIZATION } from "@/enums";

import {
	CHART_OPTIONS,
	SPECIALIZATION_DATA,
} from "./PassingScoresChart.constants";

export const getChartConfig = (specialization: SPECIALIZATION) => {
	const config = CHART_OPTIONS;

	config.dataset.source = SPECIALIZATION_DATA[specialization];

	return structuredClone(config);
};
