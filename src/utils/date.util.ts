import dayjs from "dayjs";

const formatDate = (date: Date, pattern: string) => {
	return dayjs(date).format(pattern);
};

export const formatDateDDMMYYYY = (date: Date) => {
	return formatDate(date, "DD.MM.YYYY");
};
