import React from 'react';

export default function NoteEditor () {
	return (
		<div className="editor">
			<div className="editor__title">
				<input type="text" placeholder="My first note"/>
			</div>
			<div className="editor__body">
				<textarea name="editor__body" id="editorNoteBody" value="My first note"></textarea>
			</div>
		</div>
	)
}