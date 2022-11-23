import React from "react";

import { Navigate } from "react-router-dom";

import { isUserLoggedIn } from "../utils/loginUtils";

const PrivateRoute = ({ children }) => {
	const isLoggedIn = isUserLoggedIn();

	return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
