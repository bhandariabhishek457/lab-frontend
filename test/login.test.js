import React from "react";
import "@testing-library/jest-dom";
import * as ReactDom from "react-dom";
import Login from "../src/components/auth/Login.js";
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
		ReactDom.render(
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<Login />} />
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
		expect(inputs).toHaveLength(2);

		expect(container.querySelector("section")).toBeInTheDocument();
	});
});
