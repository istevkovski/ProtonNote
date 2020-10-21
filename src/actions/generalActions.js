import { encrypt } from '../lib/encryptor';

export const setEditNote = (state) => ({
	type: 'SET_EDIT_NOTE',
	payload: state
});

export const setIsNewNote = (state) => ({
	type: 'SET_NEW_NOTE',
	payload: state
});

export const setIsLoading = (state) => ({
	type: 'SET_IS_LOADING',
	payload: state
});

export const updateNotes = (notes) => ({
	type: 'UPDATE_NOTES',
	payload: notes
});

export const updateNote = (id, title, markdown) => ({
	type: 'UPDATE_NOTE',
	payload: {
		title,
		markdown,
		id
	}
});

export const createNote = (noteObject) => ({
	type: 'CREATE_NOTE',
	payload: noteObject
});

export const removeNote = (id) => ({
	type: 'REMOVE_NOTE',
	payload: id
})

export const setActiveNote = (id) => ({
	type: 'SET_ACTIVE_NOTE',
	payload: id
});

export function createNewNote (noteObject) {
	return async function (dispatch, getState) {
		dispatch(setIsLoading(true))
		const {title, markdown} = noteObject;
		const encryptedMarkdown = await encrypt(markdown);
		dispatch(createNote({title, markdown: encryptedMarkdown}))
	}
}

export function removeSelectedNote (id) {
	return function (dispatch, getState) {
		dispatch(removeNote(id));
		const {activeNoteId} = getState().general;
		dispatch(setActiveNote(activeNoteId))
	}
}