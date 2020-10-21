const generalState = {
	isLoading: false,
	isNewNote: false,
	editMode: false,
	notes: [],
	activeNoteId: 0,
};

const generalReducer = (state = generalState, action) => {
	switch(action.type) {
		case "SET_EDIT_NOTE":
			return {
				...state,
				editMode: action.payload,
				isNewNote: false
			}
		case "SET_NEW_NOTE":
			return {
				...state,
				isNewNote: action.payload,
				editMode: action.payload
			}
		case "SET_IS_LOADING":
			return {
				...state,
				isLoading: action.payload
			}
		case "UPDATE_NOTES":
			return {
				...state,
				notes: action.payload,
				activeNote: action.payload[state.activeNoteId]
			}
		case "UPDATE_NOTE":
			return {
				...state,
				notes: state.notes.map((note, index) => {
					if(index === action.payload.id)
						return {title: action.payload.title, markdown: action.payload.markdown};
					else return note;
				}),
				editMode: false,
			}
		case "CREATE_NOTE":
			return {
				...state,
				notes: [...state.notes, action.payload],
				activeNoteId: state.notes.length, // Why it works? Ids start from 0, the length from 1.
				note: action.payload,
				editMode: false,
				isNewNote: false,
				isLoading: false
			}
		case "REMOVE_NOTE":
			return {
				...state,
				activeNoteId: state.activeNoteId > 0 ? (state.activeNoteId - 1) : 0,
				notes: state.notes.filter((note, index) => index !== action.payload),
				editMode: false
			}
		case "SET_ACTIVE_NOTE":
			return {
				...state,
				activeNoteId: action.payload,
				activeNote: state.notes[action.payload]
			}
		default:
			return state
	}
}
export default generalReducer;