import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsNewNote } from '../actions/generalActions';

export default function Header () {
	const isEditingNote = useSelector(state => state.general.editMode);
	const dispatch = useDispatch();

	function handleCreateNote () {
		dispatch(setIsNewNote(true))
	}

	return (
		<div className="header">
			<h1>ProtonMail</h1>
			<button
				className="button button--link"
				onClick={() => handleCreateNote()}
				disabled={isEditingNote}
			>New Note +</button>
		</div>
	)
}