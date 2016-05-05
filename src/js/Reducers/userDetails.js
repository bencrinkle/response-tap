const initialState = {
	username: "",
	password: "",
	passwordConfirmation: "",
	firstName: "",
	lastName: "",
	email: ""
};

const userDetails = (state = initialState, action) => {
	switch(action.type){
		case 'UPDATE_USER_DETAILS':
			var tmpUserDetails = {};
			tmpUserDetails[action.key] = action.value;
			return Object.assign({}, state, tmpUserDetails);
		default:
			return state;
	}
}

export default userDetails;