import "./../commons/model.css";
import Vaccine from "./Vaccine";
import "reactjs-popup/dist/index.css";
import Modal from "../commons/model.js";
import { useState, useEffect } from "react";
import AddEditVaccine from "./AddEditVaccine";
import { removeVaccine, getAllVaccine } from "../../service/vaccineService.js";

const VaccineList = () => {
	const [vaccines, setVaccine] = useState([]);
	const [isAddVaccineDialogOpen, setVaccineDialogOpen] = useState(false);
	const [selectedVaccine, setSelectedVaccine] = useState(null);
	const [isEdit, setIsEdit] = useState(null);

	useEffect(() => {
		getVaccines();
	}, []);

	const getVaccines = async () => {
		const response = await getAllVaccine();
		setVaccine(response.data);
	};

	const deleteVaccine = async (vaccine) => {
		await removeVaccine(vaccine.id);
		const list = vaccines.filter((vc) => vc.id !== vaccine.id);
		setVaccine(list);
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
		<div className="main-form mt-5" role="main">
			<button onClick={() => toggleAddVaccine()} className="button is-success">
				Add New
			</button>

			<table className="table is-striped  is-hoverable is-bordered is-fullwidth table-blue">
				<thead>
					<tr>
						<th>No</th>
						<th>Name</th>
						<th>Description</th>
						<th>No Of Doges</th>
						<th>Mandatory</th>
						<th>image</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{vaccines?.map((vaccine, index) => (
						<Vaccine
							deleteVaccine={deleteVaccine}
							vaccine={vaccine}
							index={index}
							setSelectedVaccine={setSelectedVaccine}
							toggleEditVaccine={toggleEditVaccine}
						/>
					))}
				</tbody>
			</table>

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
