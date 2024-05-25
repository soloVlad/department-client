import { imageUtil, nameUtil } from "@/utils";
import type { Professor } from "@/resources/professor";
import { ProfessorCard } from "@/components";
import type { CommonEntity } from "@/types";

export const createProfessorCards = (professors: CommonEntity<Professor>[]) => {
	return professors.map((professor) => {
		const { firstName, secondName, middleName, degree, avatar } =
			professor.attributes;

		const fullName = nameUtil.calcShortFullName(
			firstName,
			secondName,
			middleName,
		);

		const avatarUrl = imageUtil.getFullImageUrl(avatar.data.attributes.url);

		return (
			<ProfessorCard
				key={professor.id}
				id={professor.id}
				fullName={fullName}
				status={degree.data.attributes.name}
				imageUrl={avatarUrl}
			/>
		);
	});
};
