export const getFullImageUrl = (imageUrl: string) => {
	return import.meta.env.VITE_SERVER_URL + imageUrl;
};
