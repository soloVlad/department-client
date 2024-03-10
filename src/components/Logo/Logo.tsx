import type { FC } from "react";
import { Group, Image, Text } from "@mantine/core";

import { LogoIconUrl } from "@/assets/icons";

const Logo: FC = () => {
	return (
		<Group align="center">
			<Image src={LogoIconUrl} />
			<Text component="strong">MMF.WEB</Text>
		</Group>
	);
};

export default Logo;
