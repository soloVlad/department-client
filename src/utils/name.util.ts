export const calcShortFullName = (fullName: string) => {
	const names = fullName.split(" ");

	return `${names[0]} ${names[1][0]}. ${names?.[2][0]}.`;
};
