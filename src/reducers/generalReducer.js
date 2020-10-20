const generalState = {
	editMode: false,
	notes: []
};

const generalReducer = (state = generalState, action) => {
	switch(action.type) {
		case "ADD_NEW_NOTE":
			return {
				...state,
				editMode: true
			}
		case "SET_EDIT_NOTE":
			return {
				...state,
				editMode: action.payload
			}
		case "UPDATE_NOTES":
			return {
				...state,
				notes: action.payload
			}
		default:
			return state
	}
}
export default generalReducer;