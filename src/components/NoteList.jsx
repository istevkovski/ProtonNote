import React from 'react';

export default function NoteList () {
	return (
		<div className="notelist">
			<div className="note">
				<h2 className="note__title">My first note</h2>
			</div>
			<div className="note note--active">
				<h2 className="note__title">My second note</h2>
			</div>
			<div className="note">
				<h2 className="note__title">My first note</h2>
			</div>
			<div className="note">
				<h2 className="note__title">My second note</h2>
			</div>
			<div className="note">
				<h2 className="note__title">My first note</h2>
			</div>
			<div className="note">
				<h2 className="note__title">My second note</h2>
			</div>
		</div>
	);
}
