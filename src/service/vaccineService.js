import { http } from "../utils/http";
import { appConfig } from "../config";

export const removeVaccine = async (id) => {
	return await http.delete(appConfig.apiBaseUrl + `vaccines/${id}`);
};

export const getAllVaccine = async () => {
	return await http.get(appConfig.apiBaseUrl + "vaccines");
};

export const editVaccine = async (id, formdata) => {
	return await http.patch(
		appConfig.apiBaseUrl + `vaccines/${id}`,
		JSON.stringify(formdata)
	);
};

export const addVaccine = async (formdata) => {
	return await http.post(
		appConfig.apiBaseUrl + "vaccines",
		JSON.stringify(formdata)
	);
};
