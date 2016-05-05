const validateFailureAction = (error) => {
	return {
		type: 'VALIDATE_FAILURE',
		error
	};	
};

const validateSuccessAction = () => {
	return {
		type: 'VALIDATE_SUCCESS'
	};
};

export const validate = (validationTypes, value) => {

	return (dispatch) => {
		console.log(validationTypes);
		validationTypes.forEach((t) => {
			switch(t){
				case "required":
					if(value === "" || value === undefined){
						dispatch(validateFailureAction("Field is required"));
					}
				break;
			}
		});
		dispatch(validateSuccessAction());
	};
}
