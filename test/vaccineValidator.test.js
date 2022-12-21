import { validateVaccine } from "../src/validators/vaccineValidator";

const validVaccineData = {
	name: "hello",
	description: "hello workd",
	noOfDoges: 12,
};

const inValidVaccineData = {
	name: "",
	description: "",
	noOfDoges: "hello",
};

describe("Vaccine Validation", () => {
	test("Vaccine Validation passed case", () => {
		const errors = validateVaccine(validVaccineData);

		expect(Object.keys(errors).length).toBe(0);
	});

	test("Vaccine Validation fail case", () => {
		const errors = validateVaccine(inValidVaccineData);

		expect(Object.keys(errors).length).toBeGreaterThan(0);
	});
});
