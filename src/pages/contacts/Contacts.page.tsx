import type { FC } from "react";
import { Group, Stack, Text, Title } from "@mantine/core";

import { numberUtl } from "@/utils";
import { SectionContainer, TitledSection } from "@/components";

import { MapWidget } from "./components";
import { contactsInfo } from "./Contacts.constants";

import classes from "./Contacts.module.css";

const ContactsPage: FC = () => {
	return (
		<SectionContainer classNames={{ section: classes.section }}>
			<TitledSection title="Контакты">
				<Group gap={64} align="flex-start">
					<Stack gap={10}>
						<Title order={3}>Секретари кафедры</Title>

						<Stack gap={20}>
							{contactsInfo.map((contact) => (
								<Stack key={contact.name} gap={5}>
									<Text className={classes.text}>{contact.name}</Text>
									<Text className={classes.text}>
										{numberUtl.formatPhoneNumber(contact.phone)}
									</Text>
								</Stack>
							))}
						</Stack>
					</Stack>

					<Stack gap={20}>
						<Stack gap={10}>
							<Title order={3}>Адрес</Title>

							<Text className={classes.text}>
								Главный корпус БГУ, к. 419 <br /> пр-т Независимости, 4 <br />{" "}
								Минск 220000
							</Text>
						</Stack>

						<Stack gap={10}>
							<Title order={3}>Время работы</Title>

							<Text className={classes.text}>
								Понедельник – Пятница 10:00 - 17:00
							</Text>
						</Stack>
					</Stack>

					<MapWidget />
				</Group>
			</TitledSection>
		</SectionContainer>
	);
};

export default ContactsPage;
