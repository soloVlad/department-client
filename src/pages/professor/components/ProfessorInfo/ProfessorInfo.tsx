import type { FC } from "react";
import { Image, Stack, Title } from "@mantine/core";
import capitalize from "lodash.capitalize";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

import { numberUtl } from "@/utils";

import ProfessorInfoContact from "./ProfessorInoContact/ProfessorInfoContact";

import classes from "./ProfessorInfo.module.css";

type ProfessorInfoProps = {
	imageUrl: string;
	degree: string;
	email: string;
	address?: string;
	number?: number;
};

const ProfessorInfo: FC<ProfessorInfoProps> = ({
	imageUrl,
	degree,
	email,
	address,
	number,
}) => {
	return (
		<Stack maw={360} gap={20}>
			<Image className={classes.image} src={imageUrl} />

			<Title order={4}>{capitalize(degree)}</Title>

			<Stack gap={6}>
				<ProfessorInfoContact Icon={IconMail} text={email} type="email" />

				{number && (
					<ProfessorInfoContact
						Icon={IconPhone}
						text={numberUtl.formatPhoneNumber(number)}
						type="phone"
					/>
				)}

				{address && (
					<ProfessorInfoContact
						Icon={IconMapPin}
						text={address}
						type="address"
					/>
				)}
			</Stack>
		</Stack>
	);
};

export default ProfessorInfo;
