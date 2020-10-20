export const setEditNote = (state) => ({
	type: 'SET_EDIT_NOTE',
	payload: state
});

export const updateNotes = (notes) => ({
	type: 'UPDATE_NOTES',
	payload: notes
});