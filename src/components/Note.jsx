import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote } from '../actions/generalActions';

export default function Note ({title, active, id}) {
	const isEditingNote = useSelector(state => state.general.editMode);
	const dispatch = useDispatch();

	function handleNoteSelection () {
		dispatch(setActiveNote(id));
	}

	return (
		<div
			className={`note ${active ? 'note--active' : ''}`}
			onClick={() => handleNoteSelection()}
			disabled={Boolean(isEditingNote && !active)}
		>
			<h2 className="note__title">{title}</h2>
		</div>
	);
}