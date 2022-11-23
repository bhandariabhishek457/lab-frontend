export const validateVaccine = (values) => {
	const errors = {};

	if (!values.name) {
		errors.name = "Vaccine name is required";
	}
	if (!values.description) {
		errors.description = "Vaccine description is required";
	}

	if (!values.noOfDoges) {
		errors.noOfDoges = "No of doges  is required";
	} else if (isNaN(values.noOfDoges)) {
		errors.noOfDoges = "No of doges must be a number";
	}
	return errors;
};
