import axios from "axios";
import React, { useState } from "react";
import { appConfig } from "../config";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../validators/userRegisterValidator";

const Register = () => {
	const navigator = useNavigate();
	const initialRegisterValues = {
		email: "",
		password: "",
		confPassword: "",
	};
	const [msg, setMsg] = useState("");
	const [formErrors, setFormErrors] = useState({});
	const [formValues, setFormValues] = useState(initialRegisterValues);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const Register = async (e) => {
		e.preventDefault();

		const errors = validateUser(formValues);

		setFormErrors(errors);

		if (Object.keys(errors).length > 0) {
			return;
		}
		try {
			console.log(JSON.stringify(formValues));
			await axios.post(appConfig.apiBaseUrl + "users", formValues);
			navigator("/");
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
							<form onSubmit={Register} className="box">
								<p className="has-text-centered">{msg}</p>

								<div className="field mt-5">
									<label className="label">Email</label>
									<div className="controls">
										<input
											type="text"
											className="input"
											name="email"
											placeholder="Email"
											value={formValues.email}
											onChange={handleChange}
										/>
										<p>{formErrors.email}</p>
									</div>
								</div>
								<div className="field mt-5">
									<label className="label">Password</label>
									<div className="controls">
										<input
											type="password"
											name="password"
											className="input"
											placeholder="******"
											value={formValues.password}
											onChange={handleChange}
										/>
										<p>{formErrors.password}</p>
									</div>
								</div>
								<div className="field mt-5">
									<label className="label">Confirm Password</label>
									<div className="controls">
										<input
											type="password"
											name="confPassword"
											className="input"
											placeholder="******"
											value={formValues.confPassword}
											onChange={handleChange}
										/>
										<p>{formErrors.confPassword}</p>
									</div>
								</div>
								<div className="field mt-5">
									<button className="button is-success is-fullwidth">
										Register
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
