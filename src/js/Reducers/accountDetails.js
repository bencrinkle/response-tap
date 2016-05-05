const initialState = {
	accountName: "",	
	businessName: "",
	companyNumber: "",
	postcode: "",
	address: "",
	addresses: [],
	telephone: "",
	timezone: "",
	paymentmethod: ""
};

const accountDetails = (state = initialState, action) => {
	switch(action.type){
		case 'UPDATE_ACCOUNT_DETAILS':
			var tmpAcccountDetails = {};
			tmpAcccountDetails[action.key] = action.value;
			return Object.assign({}, state, tmpAcccountDetails);
		default:
			return state;
	}
}

export default accountDetails;