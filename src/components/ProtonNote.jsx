import React from 'react';

// Components
import Header from './Header';
import NoteEditor from './NoteEditor';
import NoteList from './NoteList';


export default function ProtonNote () {
	// Get all notes here

	return (
		<>
			<Header />
			<main>
				<NoteList />
				<NoteEditor />
			</main>
		</>
	)
}