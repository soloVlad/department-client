import type { FC } from "react";
import { Box, Group, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import cx from "clsx";

import type { Routes } from "@/router";

import { LogoIconUrl } from "@/assets/icons";

import classes from "./Logo.module.css";

type LogoProps = {
	className?: string;
	href?: Routes;
};

const Logo: FC<LogoProps> = ({ className, href }) => {
	const navigate = useNavigate();

	const handleLogoClick = () => {
		if (href) {
			navigate(href);
		}
	};

	return (
		<Box className={className}>
			<Group
				className={cx(classes.logoContainer, {
					[classes.clickable]: Boolean(href),
				})}
				align="center"
				gap={10}
				onClick={handleLogoClick}
			>
				<Image src={LogoIconUrl} />

				<Text className={classes.text} component="strong">
					MMF.WEB
				</Text>
			</Group>
		</Box>
	);
};

export default Logo;
