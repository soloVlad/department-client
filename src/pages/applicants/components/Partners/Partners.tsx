import type { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Image } from "@mantine/core";

import { TitledSection } from "@/components";

import { PARTNERS } from "./Partners.constants";

import classes from "./Partners.module.css";

const Partners: FC = () => {
	return (
		<TitledSection id="partners" title="Компании-партнёры" mt={66}>
			<Box className={classes.wrapper}>
				{PARTNERS.map((partner) => (
					<Link to={partner.href} target="_blank" key={partner.id}>
						<Image src={partner.imgUrl} />
					</Link>
				))}
			</Box>
		</TitledSection>
	);
};

export default Partners;
