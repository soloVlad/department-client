import type { FC } from "react";
import { Box } from "@mantine/core";
import { Map as YMap, YMaps, GeoObject } from "@pbe/react-yandex-maps";

import { COORDINATES } from "./MapWidget.constants";

import classes from "./MapWidget.module.css";

const MapWidget: FC = () => {
	return (
		<Box className={classes.mapWrapper}>
			<YMaps>
				<YMap
					width={500}
					height={400}
					defaultState={{ center: COORDINATES, zoom: 17 }}
				>
					<GeoObject geometry={{ type: "Point", coordinates: COORDINATES }} />
				</YMap>
			</YMaps>
		</Box>
	);
};

export default MapWidget;
