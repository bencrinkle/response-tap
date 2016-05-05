const updateTabAction = (tab) => {
	return {
		type: 'UPDATE_TAB',
		tab
	};
};

const updateAccountDetailsAction = (key, value) => {
	return {
		type: 'UPDATE_ACCOUNT_DETAILS',
		key,
		value
	}
}

const updateUserDetailsAction = (key, value) => {
	return {
		type: 'UPDATE_USER_DETAILS',
		key,
		value
	}
}

const updateBillingContactAction = (key, value) => {
	return {
		type: 'UPDATE_BILLING_CONTACT',
		key,
		value
	}
}

export const updateTab = (tab) => {
	return (dispatch) => {
		dispatch(updateTabAction(tab));
	};
};

export const updateAccountDetails = (key, value) => {
	return (dispatch) => {
		dispatch(updateAccountDetailsAction(key, value));
	}
}

export const updateUserDetails = (key, value) => {
	return (dispatch) => {
		dispatch(updateUserDetailsAction(key, value));
	}
}

export const updateBillingContact = (key, value) => {
	return (dispatch) => {
		dispatch(updateBillingContactAction(key, value));
	}
}
