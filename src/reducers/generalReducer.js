const generalState = {
	editMode: false,
};

const generalReducer = (state = generalState, action) => {
	switch(action.type) {
		case "ADD_NEW_NOTE":
			return {
				...state,
				editMode: !state.editMode
			}
		default:
			return state
	}
}
export default generalReducer;