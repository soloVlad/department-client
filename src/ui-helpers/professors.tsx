import { nameUtil } from "@/utils";
import type { Professor } from "@/resources/professor";
import { ProfessorCard } from "@/components";
import type { CommonEntity } from "@/types";

const createProfessorCards = (professors: CommonEntity<Professor>[]) => {
	return professors.map((professor) => {
		const { fullName, degree, avatar } = professor.attributes;

		const shortFullName = nameUtil.calcShortFullName(fullName);

		const avatarUrl = avatar.data.attributes.url;

		return (
			<ProfessorCard
				key={professor.id}
				id={professor.id}
				fullName={shortFullName}
				status={degree.data.attributes.name}
				imageUrl={avatarUrl}
			/>
		);
	});
};

export default {
	createProfessorCards,
};
