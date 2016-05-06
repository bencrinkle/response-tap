const initialState = {
	tab: 1
};

const ui = (state = initialState, action) => {
	switch(action.type){
		case 'UPDATE_TAB':
			var newTab = state.tab + 1;
			return Object.assign({}, state, {'tab': newTab});
		default:
			return state;
	}
}

export default ui;

