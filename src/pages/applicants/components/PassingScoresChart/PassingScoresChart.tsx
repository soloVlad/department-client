import { useState, type FC } from "react";
import { Box, Group, Stack, Text } from "@mantine/core";
import ReactECharts from "echarts-for-react";
import clsx from "clsx";

import { TitledSection } from "@/components";
import { SPECIALIZATION } from "@/enums";

import { SPECIALIZATION_DESCRIPTION } from "./PassingScoresChart.constants";
import { getChartConfig } from "./PassingScoresChart.helpers";

import classes from "./PassingScoresChart.module.css";

const PassingScoresChart: FC = () => {
	const [specialization, setSpecialization] = useState<SPECIALIZATION>(
		SPECIALIZATION.WEB,
	);

	const chartConfig = getChartConfig(specialization);

	const handleOptionClick = (option: SPECIALIZATION) => {
		setSpecialization(option);
	};

	return (
		<TitledSection id="passing-scores" title="Проходные баллы" mt={80}>
			<Stack gap={40}>
				<Group className={classes.switcher}>
					<Box
						className={clsx(classes.option, {
							[classes.activeOption]: specialization === SPECIALIZATION.WEB,
						})}
						onClick={() => handleOptionClick(SPECIALIZATION.WEB)}
					>
						Веб-программирование и интернет-технологии
					</Box>

					<Box
						className={clsx(classes.option, {
							[classes.activeOption]: specialization === SPECIALIZATION.MOBILE,
						})}
						onClick={() => handleOptionClick(SPECIALIZATION.MOBILE)}
					>
						Математическое и программное обеспечение мобильных устройств
					</Box>
				</Group>

				<Box className={classes.chartWrapper}>
					<Box className={classes.chartContainer}>
						<ReactECharts
							style={{ width: "100%" }}
							option={chartConfig}
							notMerge={true}
						/>
					</Box>
				</Box>

				<Text fz={18}>{SPECIALIZATION_DESCRIPTION[specialization]}</Text>
			</Stack>
		</TitledSection>
	);
};

export default PassingScoresChart;
