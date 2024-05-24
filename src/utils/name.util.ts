export const calcShortFullName = (
	firstName: string,
	secondName: string,
	middleName?: string,
) => {
	return `${secondName} ${firstName[0]}. ${middleName?.[0]}.`;
};
