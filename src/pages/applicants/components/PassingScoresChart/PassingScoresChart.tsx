import type { FC } from "react";
import { Stack, Text } from "@mantine/core";
import ReactECharts from "echarts-for-react";

import { TitledSection } from "@/components";

import { CHART_OPTIONS } from "./PassingScoresChart.constants";

const PassingScoresChart: FC = () => {
	return (
		<TitledSection id="passing-scores" title="Проходные баллы" mt={80}>
			<Stack gap={40}>
				<div>switcher</div>

				<ReactECharts option={CHART_OPTIONS} />

				<Text>sdf</Text>
			</Stack>
		</TitledSection>
	);
};

export default PassingScoresChart;
