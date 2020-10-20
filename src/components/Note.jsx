import React from 'react';

export default function Note ({title}) {
	return (
		<div className="note">
			<h2 className="note__title">{title}</h2>
		</div>
	);
}