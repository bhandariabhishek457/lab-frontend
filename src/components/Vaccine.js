import { Avatar } from "antd";

const Vaccine = (props) => {
	return (
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
				{props.vaccines.map((vaccine, index) => (
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
								<Avatar src={vaccine.image} width="100px" alt="error!" />
							</a>
						</td>
						<td>
							<button
								onClick={() => {
									props.setSelectedVaccine(vaccine);
									props.toggleEditVaccine();
								}}
								className="button is-small is-info"
							>
								Edit
							</button>
							<button
								onClick={() => props.deleteVaccine(vaccine.id)}
								className="button is-small is-danger"
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Vaccine;
