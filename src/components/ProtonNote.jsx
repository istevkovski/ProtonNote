import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateNotes } from '../actions/generalActions';

// Components
import Header from './Header';
import NoteEditor from './NoteEditor';
import NoteList from './NoteList';


export default function ProtonNote () {
	const dispatch = useDispatch();
	
	// Get all notes here
	const notes = [];

	useEffect(() => {
		dispatch(updateNotes(notes))
	}, []);

	return (
		<>
			<Header />
			<main>
				<NoteList notes={notes}/>
				<NoteEditor />
			</main>
		</>
	)
}