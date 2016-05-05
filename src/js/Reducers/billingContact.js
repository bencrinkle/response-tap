const initialState = {
	firstName: "",
	lastName: "",
	email: ""
};

const billingContact = (state = initialState, action) => {
	switch(action.type){
		case 'UPDATE_BILLING_CONTACT':
			var tmpBillingContact = {};
			tmpBillingContact[action.key] = action.value;
			return Object.assign({}, state, tmpBillingContact);
		default:
			return state;
	}
}

export default billingContact;