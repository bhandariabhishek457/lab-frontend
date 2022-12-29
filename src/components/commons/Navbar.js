import "../../App.css";
import React from "react";
import axios from "axios";
import { appConfig } from "../../config";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigator = useNavigate();

	const Logout = async () => {
		try {
			await axios.delete(appConfig.apiBaseUrl + "logout");
			localStorage.removeItem("token");
			navigator("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<nav
			className="navbar is-success"
			role="navigation"
			aria-label="main navigation"
		>
			{" "}
			<div className="container">
				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons is-primary">
								<button onClick={Logout} className="button is-light">
									Log Out
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
