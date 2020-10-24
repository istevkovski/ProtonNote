import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';

export default function NoteList () {
	const isLoading = useSelector(state => state.general.isLoading);
	const notes = useSelector(state => state.general.notes);
	const activeNoteId = useSelector(state => state.general.activeNoteId);

	return (
		<div className="notelist">
			{
				notes.map((note, index) => {
					return (
						<Note
							title={note.title}
							key={`note_${index}`}
							active={activeNoteId === index}
							id={index}
							disabled={isLoading}
						/>
					)
				})
			}
		</div>
	);
}
