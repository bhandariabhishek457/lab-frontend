import { Avatar } from "antd";

const Vaccine = (props) => {
	const vaccine = props.vaccine;
	return (
		<tr role="table-row" key={vaccine.id}>
			<td>{props.index + 1}</td>
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
					onClick={() => props.deleteVaccine(vaccine)}
					className="button is-small is-danger"
				>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default Vaccine;
