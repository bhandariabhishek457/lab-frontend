import axios from "axios";
import { appConfig } from "../config";
import jwt_decode from "jwt-decode";

export const http = axios.create({
	baseURL: appConfig.apiBaseUrl,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

http.interceptors.request.use(
	async (config) => {
		const token = localStorage.getItem("token");
		const decoded = jwt_decode(token);
		const currentDate = new Date();

		if (decoded.exp * 1000 < currentDate.getTime()) {
			const response = await axios.get(appConfig.apiBaseUrl + "token");
			config.headers.Authorization = `Bearer ${response.data.accessToken}`;
			localStorage.setItem("token", response.data.accessToken);
		} else {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
