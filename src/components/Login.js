import axios from "axios";
import { appConfig } from "../config";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [msg, setMsg] = useState("");
	const navigator = useNavigate();

	useEffect(() => {
		if (localStorage.getItem("token")) {
			navigator("/dashboard");
		}
	}, []);

	const Auth = async (e) => {
		e.preventDefault();
		try {
			let response = await axios.post(appConfig.apiBaseUrl + "login", {
				email: email,
				password: password,
			});
			localStorage.setItem("token", response.data.accessToken);

			navigator("/dashboard");
		} catch (error) {
			if (error.response) {
				setMsg(error.response.data.msg);
			}
		}
	};

	return (
		<section className="hero has-background-grey-light is-fullheight is-fullwidth">
			<div className="hero-body">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-4-desktop">
							<form onSubmit={Auth} className="box">
								<p className="has-text-centered">{msg}</p>
								<div className="field mt-5">
									<label className="label">Email or Username</label>
									<div className="controls">
										<input
											type="text"
											className="input"
											placeholder="Username"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								</div>
								<div className="field mt-5">
									<label className="label">Password</label>
									<div className="controls">
										<input
											type="password"
											className="input"
											placeholder="******"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
								</div>
								<div className="field mt-5">
									<button className="button is-success is-fullwidth">
										Login
									</button>
								</div>
							</form>
							<div className="field mt-5">
								<a href="/register">Register</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
