import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";

import Vaccine from "../src/components/vaccines/Vaccine";

const dummyVaccine = [
	{
		id: 1,
		description: "Vaccine 1 Descripion",
		name: "vaccine 1",
		noOfDoges: 4,
	},
	{
		id: 2,
		description: "Vaccine 2 Descripion",
		name: "vaccine 2",
		noOfDoges: 5,
	},
	{
		id: 3,
		description: "Vaccine 3 Descripion",
		name: "vaccine 3",
		noOfDoges: 5,
	},
];

beforeAll(() => {
	Object.defineProperty(window, "matchMedia", {
		writable: true,
		value: jest.fn().mockImplementation((query) => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: jest.fn(), // Deprecated
			removeListener: jest.fn(), // Deprecated
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn(),
		})),
	});
});

test("Vaccine row creation test", async () => {
	render(<Vaccine vaccines={dummyVaccine} />);

	expect(screen.getByRole("table")).toBeInTheDocument();

	expect(screen.getByRole("table").children.length).toBe(2);

	expect(screen.getByRole("table").children[1].children.length).toBe(3);
});
