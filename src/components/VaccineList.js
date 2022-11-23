import "./model.css";
import { http } from "../utils/http";
import "reactjs-popup/dist/index.css";
import Modal from "./model.js";
import { appConfig } from "../config";
import { useState, useEffect } from "react";
import AddEditVaccine from "./AddEditVaccine";
import { Avatar } from "antd";
import Vaccine from "./Vaccine";

const VaccineList = () => {
	const [vaccines, setVaccine] = useState([]);
	const [isAddVaccineDialogOpen, setVaccineDialogOpen] = useState(false);
	const [selectedVaccine, setSelectedVaccine] = useState(null);
	const [isEdit, setIsEdit] = useState(null);

	useEffect(() => {
		getVaccines();
	}, []);

	const getVaccines = async () => {
		const response = await http.get(appConfig.apiBaseUrl + "vaccines");
		setVaccine(response.data);
	};

	const deleteVaccine = async (id) => {
		await http.delete(appConfig.apiBaseUrl + `vaccines/${id}`);
		getVaccines();
	};

	const toggleAddVaccine = () => {
		setVaccineDialogOpen(!isAddVaccineDialogOpen);
		getVaccines();
	};

	const toggleIsEdit = () => {
		setIsEdit(!isEdit);
	};

	const toggleEditVaccine = () => {
		setIsEdit(true);
		setVaccineDialogOpen(!isAddVaccineDialogOpen);
	};

	return (
		<div className="main-form">
			<button onClick={() => toggleAddVaccine()} className="button is-success">
				Add New
			</button>
			<Vaccine
				deleteVaccine={deleteVaccine}
				vaccines={vaccines}
				setSelectedVaccine={setSelectedVaccine}
				toggleEditVaccine={toggleEditVaccine}
			/>

			<Modal open={isAddVaccineDialogOpen}>
				<AddEditVaccine
					toggleAddVaccine={toggleAddVaccine}
					isEdit={isEdit}
					vaccine={selectedVaccine}
					toggleIsEdit={toggleIsEdit}
				></AddEditVaccine>
			</Modal>
		</div>
	);
};

export default VaccineList;
