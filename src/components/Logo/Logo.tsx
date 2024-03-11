import type { FC } from "react";
import { Group, Image, Text } from "@mantine/core";

import { LogoIconUrl } from "@/assets/icons";

import classes from "./Logo.module.css";

const Logo: FC = () => {
	return (
		<Group align="center" gap={10}>
			<Image src={LogoIconUrl} />

			<Text className={classes.text} component="strong">
				MMF.WEB
			</Text>
		</Group>
	);
};

export default Logo;
