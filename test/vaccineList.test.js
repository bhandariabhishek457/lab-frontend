import React from "react";
import "@testing-library/jest-dom";
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import VaccineList from "../src/components/vaccines/VaccineList";

global.console = {
	...console,
	error: jest.fn(),
};

test("Vaccine for loaded create mode", async () => {
	render(
		<MemoryRouter initialEntries={["/dashboard"]}>
			<Routes>
				<Route path="*" element={<VaccineList />} />
			</Routes>
		</MemoryRouter>
	);

	expect(screen.getByRole("main")).toBeInTheDocument();
});
