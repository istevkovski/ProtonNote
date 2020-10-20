import React from 'react';
import Note from './Note';

export default function NoteList ({notes}) {

	return (
		<div className="notelist">
			{
				notes.map(note => {
					return <Note title={note.title} />
				})
			}
		</div>
	);
}
