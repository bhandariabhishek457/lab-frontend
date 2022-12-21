import React from "react";
import { render } from "react-dom";
import "@testing-library/jest-dom";
import Register from "../src/components/auth/Register.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

global.console = {
	...console,
	error: jest.fn(),
};

describe("Login component test", () => {
	let container = HTMLDivElement;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);
		render(
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<Register />} />
				</Routes>
			</BrowserRouter>,
			container
		);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	test("renders correctly login component", () => {
		const inputs = container.querySelectorAll("input");

		expect(inputs).toHaveLength(3);
		expect(container.querySelector("section")).toBeInTheDocument();
	});
});
