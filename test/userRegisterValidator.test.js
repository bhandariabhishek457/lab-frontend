import { validateUser } from "../src/validators/userRegisterValidator";

const validUserData = {
	email: "a@gmail.com",
	password: "password",
	confPassword: "password",
};

const inValidUserData = {
	email: "a.com",
	password: "",
	confPassword: "",
};

describe("Vaccine Validation", () => {
	test("Vaccine Validation passed case", () => {
		const errors = validateUser(validUserData);

		expect(Object.keys(errors).length).toBe(0);
	});

	test("Vaccine Validation fail case", () => {
		const errors = validateUser(inValidUserData);

		expect(Object.keys(errors).length).toBeGreaterThan(0);
	});
});
