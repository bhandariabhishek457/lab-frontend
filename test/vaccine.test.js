import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";

import Vaccine from "../src/components/vaccines/Vaccine";

const dummyVaccine = {
	id: 1,
	description: "Vaccine 1 Descripion",
	name: "vaccine 1",
	noOfDoges: 4,
};

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
	render(<Vaccine vaccine={dummyVaccine} />);

	expect(screen.getByRole("table-row")).toBeInTheDocument();
});
