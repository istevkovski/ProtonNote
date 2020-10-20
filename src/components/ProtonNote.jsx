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
	const notes = [
		{
			title: "My first note",
			markdown:
`# A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |`
		},
		{
			title: "My second note",
			markdown:
`# A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |`
		}
	]

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