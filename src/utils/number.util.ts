export const formatPhoneNumber = (number: number) => {
	const numberString = String(number);
	const cleaned = numberString.replace(/\D/g, "");

	if (numberString.length === 12) {
		const formattedNumber = cleaned.replace(
			/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
			"($1 $2) $3-$4-$5",
		);

		return formattedNumber;
	}

	return cleaned.replace(
		/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
		"($1 $2) $3-$4-$5",
	);
};
