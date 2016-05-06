const initialState = {
	accountName: "",	
	businessName: "",
	companyNumber: "",
	postcode: "",
	address: "",
	addresses: [],
	telephone: "",
	timezone: "",
	paymentmethod: "",
	gettingAddresses: false
};

const accountDetails = (state = initialState, action) => {
	switch(action.type){
		case 'UPDATE_ACCOUNT_DETAILS':
			var tmpAcccountDetails = {};
			tmpAcccountDetails[action.key] = action.value;
			return Object.assign({}, state, tmpAcccountDetails);
		case 'GET_ADDRESSES_PENDING':
			return Object.assign({}, state, {gettingAddresses: true});
		case 'GET_ADDRESSES_SUCCESS':
			return Object.assign({}, state, {gettingAddresses: false, addresses: action.addresses.Addresses});
		case 'GET_ADDRESSES_ERROR':
			return Object.assign({}, state, {gettingAddresses: false, errors: action.error});
		default:
			return state;
	}
}

export default accountDetails;