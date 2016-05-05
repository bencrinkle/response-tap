const validateFailureAction = (error) => {
	return {
		type: 'VALIDATE_FAILURE',
		error
	};
};


export const validate = (validationTypes, value) => {
	validationTypes.forEach((type) => {
		console.log(type);
		console.log(value);
	});
}
