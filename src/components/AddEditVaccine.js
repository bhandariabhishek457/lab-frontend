import "../App.css";
import { http } from "../utils/http";
import { appConfig } from "../config";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { validateVaccine } from "../validators/vaccineValidator";

const AddEditVaccine = (props) => {
	const navigate = useNavigate();

	const initialVaccineValues = {
		name: "",
		description: "",
		noOfDoges: "",
		mandatory: false,
	};
	const [formErrors, setFormErrors] = useState({});
	const [vaccineImage, setVaccineImage] = useState({});
	const [formValues, setFormValues] = useState(initialVaccineValues);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleMandatoryCheckboxChange = (e) => {
		if (e.target.checked) {
			setFormValues({ ...formValues, [e.target.name]: true });
		} else {
			setFormValues({ ...formValues, [e.target.name]: false });
		}
	};

	useEffect(() => {
		if (props.isEdit) {
			setFormValues(props.vaccine);
		} else {
			setFormValues({});
		}
	}, []);

	const submit = async (e) => {
		e.preventDefault();

		const errors = validateVaccine(formValues);

		setFormErrors(errors);

		if (Object.keys(errors).length > 0) {
			return;
		}

		if (props.isEdit) {
			try {
				await http.patch(
					appConfig.apiBaseUrl + `vaccines/${props.vaccine.id}`,
					JSON.stringify(formValues)
				);
				props.toggleAddVaccine();
				props.toggleIsEdit();
				navigate("/dashboard");
			} catch (error) {
				console.log(error);
			}
		} else {
			try {
				await http.post(
					appConfig.apiBaseUrl + "vaccines",
					JSON.stringify(formValues)
				);
				props.toggleAddVaccine();
				navigate("/dashboard");
			} catch (error) {
				console.log(error);
			}
		}
	};

	const cancelAddDialog = () => {
		props.toggleAddVaccine();
		if (props.isEdit) {
			props.toggleIsEdit();
		}
	};

	const handleProductImageUpload = (e) => {
		const file = e.target.files[0];

		TransformFileData(file, e);
	};

	const TransformFileData = (file, e) => {
		const reader = new FileReader();

		if (file) {
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				setVaccineImage(reader.result);
				setFormValues({ ...formValues, [e.target.name]: reader.result });
			};
		} else {
			setVaccineImage("");
		}
	};

	return (
		<form onSubmit={submit} className="popup_internal">
			<div className="field">
				<label className="field">Name</label>
				<div className="control">
					<input
						type="text"
						name="name"
						className="input"
						value={formValues.name}
						onChange={handleChange}
						placeholder="Name"
					/>
					<p>{formErrors.name}</p>
				</div>
			</div>
			<div className="field">
				<label className="field">Description</label>
				<div className="control">
					<input
						type="text"
						name="description"
						className="input"
						value={formValues.description}
						onChange={handleChange}
						placeholder="description"
					/>
					<p>{formErrors.description}</p>
				</div>
			</div>
			<div className="field">
				<label className="field">No Of Doges</label>
				<div className="control">
					<input
						type="text"
						className="input"
						name="noOfDoges"
						value={formValues.noOfDoges}
						onChange={handleChange}
						placeholder="noOfDoges"
					/>
					<p>{formErrors.noOfDoges}</p>
				</div>
			</div>
			<div className="field">
				<label className="field">Is Mandatory</label>
				<div className="control">
					<input
						type="checkbox"
						name="mandatory"
						checked={formValues.mandatory}
						onChange={handleMandatoryCheckboxChange}
					/>
				</div>
			</div>
			<div className="field">
				<div className="control">
					<input
						id="imgUpload"
						name="image"
						accept="image/*"
						type="file"
						onChange={handleProductImageUpload}
					/>
					{vaccineImage ? (
						<>
							<img src={formValues.image} alt="error!" />
						</>
					) : (
						<p>Product image upload preview will appear here!</p>
					)}
				</div>
			</div>

			<div className="field">
				<div className="control">
					<button type="submit" className="button is-success">
						Save
					</button>
					<button
						onClick={cancelAddDialog}
						className="button is-danger footer-cancel-button"
					>
						Cancel
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddEditVaccine;
