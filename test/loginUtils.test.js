import {
	isUserLoggedIn,
	getDataFromLocalStorage,
	getTokenFromLocalStorage,
} from "../src/utils/loginUtils.js";

const token = "skdfalkdshfaohdfosaf";

describe("Login component test", () => {
	beforeEach(() => {
		localStorage.setItem("token", token);
	});

	afterEach(() => {
		localStorage.removeItem("token");
	});

	test("isUserLoggedIn", () => {
		const receivedToken = isUserLoggedIn();

		expect(receivedToken).toBe(token);
	});

	test("getDataFromLocalStorage", () => {
		const receivedData = getDataFromLocalStorage("token", false);

		expect(receivedData).toBe(token);
	});

	test("getTokenFromLocalStorage", () => {
		const receivedData = getTokenFromLocalStorage();

		expect(receivedData).toBe(token);
	});
});
