import "./model.css";
import { http } from "../utils/http";
import "reactjs-popup/dist/index.css";
import Modal from "./model.js";
import { appConfig } from "../config";
import { useState, useEffect } from "react";
import AddEditVaccine from "./AddEditVaccine";

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
			<table className="table is-striped is-fullwidth">
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
					{vaccines.map((vaccine, index) => (
						<tr key={vaccine.id}>
							<td>{index + 1}</td>
							<td>{vaccine.name}</td>
							<td>{vaccine.description}</td>
							<td>{vaccine.noOfDoges}</td>
							<td>
								<input
									type="checkbox"
									readOnly
									checked={vaccine.mandatory}
									disabled={true}
								></input>
							</td>
							<td>
								<a href={vaccine.image}>
									<img src={vaccine.image} width="100px" alt="error!" />
								</a>
							</td>
							<td>
								<button
									onClick={() => {
										setSelectedVaccine(vaccine);
										toggleEditVaccine();
									}}
									className="button is-small is-info"
								>
									Edit
								</button>
								<button
									onClick={() => deleteVaccine(vaccine.id)}
									className="button is-small is-danger"
								>
									Delete
								</button>
							</td>
						</tr>
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
