export const isUserLoggedIn = () => {
	const accessToken = getTokenFromLocalStorage() || "";

	return accessToken;
};

export const getDataFromLocalStorage = (key, isObject = false) => {
	const value = localStorage.getItem(key);

	return isObject ? JSON.parse(value) : value;
};

export const getTokenFromLocalStorage = () => {
	const token = getDataFromLocalStorage("token");

	return token;
};
