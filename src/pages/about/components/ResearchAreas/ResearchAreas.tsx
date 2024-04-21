import type { FC } from "react";
import { Accordion } from "@mantine/core";

import { TitledSection } from "@/components";

import { RESEARCH_AREAS } from "./ResearchAreas.constants";

const ResearchAreas: FC = () => {
	return (
		<TitledSection id="areas" mt={80} title="Научные направления">
			<Accordion>
				{RESEARCH_AREAS.map((area) => (
					<Accordion.Item key={area.value} value={area.value}>
						<Accordion.Control>{area.value}</Accordion.Control>
						<Accordion.Panel>{area.description}</Accordion.Panel>
					</Accordion.Item>
				))}
			</Accordion>
		</TitledSection>
	);
};

export default ResearchAreas;
