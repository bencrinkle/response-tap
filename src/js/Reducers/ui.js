const initialState = {
	tab: 1
};

const ui = (state = initialState, action) => {
	switch(action.type){
		case 'UPDATE_TAB':
			return Object.assign({}, state, {'tab': action.tab});
		default:
			return state;
	}
}

export default ui;

