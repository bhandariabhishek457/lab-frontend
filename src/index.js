import App from "./App";
import React from "react";
import axios from "axios";
import "bulma/css/bulma.css";
import ReactDOM from "react-dom/client";

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
