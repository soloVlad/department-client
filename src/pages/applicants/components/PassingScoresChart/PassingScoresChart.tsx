import type { FC } from "react";
import { Box, Stack, Text } from "@mantine/core";
import ReactECharts from "echarts-for-react";

import { TitledSection } from "@/components";

import { CHART_OPTIONS } from "./PassingScoresChart.constants";

import classes from "./PassingScoresChart.module.css";

const PassingScoresChart: FC = () => {
	return (
		<TitledSection id="passing-scores" title="Проходные баллы" mt={80}>
			<Stack gap={40}>
				<div>switcher</div>

				<Box className={classes.chartWrapper}>
					<Box className={classes.chartContainer}>
						<ReactECharts style={{ width: "100%" }} option={CHART_OPTIONS} />
					</Box>
				</Box>

				<Text>sdf</Text>
			</Stack>
		</TitledSection>
	);
};

export default PassingScoresChart;
