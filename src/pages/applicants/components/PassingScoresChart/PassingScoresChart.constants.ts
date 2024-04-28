export const CHART_OPTIONS = {
	legend: {
		textStyle: {
			color: "#A4B4BC",
			fontWeight: 600,
			fontSize: 14,
		},
	},
	tooltip: {},
	textStyle: {
		color: "#A4B4BC",
	},
	itemStyle: {
		borderRadius: [5, 5, 0, 0],
	},
	dataset: {
		dimensions: ["product", "Бюджет", "Платное"],
		source: [
			{ product: "2018", Бюджет: 350, Платное: 285 },
			{ product: "2019", Бюджет: 345, Платное: 251 },
			{ product: "2020", Бюджет: 348, Платное: 291 },
			{ product: "2021", Бюджет: 329, Платное: 250 },
			{ product: "2022", Бюджет: 343, Платное: 289 },
			{ product: "2023", Бюджет: 354, Платное: 296 },
		],
	},
	xAxis: {
		type: "category",
		axisTick: { show: false },
		axisLabel: {
			margin: 14,
			fontSize: 16,
		},
	},
	yAxis: {
		axisLabel: {
			margin: 20,
			fontSize: 16,
		},
	},
	series: [
		{
			type: "bar",
			label: {
				show: true,
				position: "top",
				color: "#A4B4BC",
				fontWeight: 600,
				fontSize: 14,
			},
			barGap: 0,
			color: "#A4B4BC",
		},
		{
			type: "bar",
			label: {
				show: true,
				position: "top",
				color: "#A4B4BC",
				fontWeight: 600,
				fontSize: 14,
			},
			barGap: 0,
			color: "#5C727F",
		},
	],
};
