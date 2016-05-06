const updateTabAction = () => {
	return {
		type: 'UPDATE_TAB'
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

const getAddressesPendingAction = () => {
	return {
		type: 'GET_ADDRESSES_PENDING'
	}
}

const getAddressesSuccessAction = (addresses) => {
	return {
		type: 'GET_ADDRESSES_SUCCESS',
		addresses
	}
}

const getAddressesErrorAction = (error) => {
	return {
		type: 'GET_ADDRESSES_ERROR',
		error
	}
}
export const updateTab = () => {
	return (dispatch) => {
		dispatch(updateTabAction());
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

export const getAddresses = (postcode) => {
	return (dispatch) => {
		dispatch(getAddressesPendingAction());
		return fetch(`https://api.getAddress.io/v2/uk/${postcode}?api-key=QtAd5jwkp0eaQ2WY-CjMHQ4136`).then(response => {
			if(response.ok){
				response.json().then(json => {
					dispatch(getAddressesSuccessAction(json));
				});
			} else {
				response.json().then(json => {
					dispatch(getAddressesErrorAction(json));
				});
			}
		})
		.catch(error => {
			console.log('There has been a problem with your fetch operation: ' + error.message);
		});
	}
}