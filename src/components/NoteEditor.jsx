import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { useDispatch, useSelector } from 'react-redux';
import { setEditNote } from '../actions/generalActions';
import { Cancel, Edit, Save, Trash } from './Icons';

export default function NoteEditor () {
	// General
	const isEditingNote = useSelector(state => state.general.editMode);
	// Local
	const [markdown, setMarkdown] = useState('');

	const dispatch = useDispatch();

	function renderEditorControls () {
		if(isEditingNote) {
			return (
				<>
				<button className="button button--icon" onClick={() => dispatch(setEditNote(false))}>
					<Cancel />
					<p>Cancel</p>
				</button>
				<div className="group">
					<button className="button button--icon">
						<Save />
						<p>Save</p>
					</button>
					<button className="button button--icon">
						<Trash />
						<p>Delete</p>
					</button>
				</div>
				</>
			)
		} else {
			return (
				<button className="button button--icon margin-auto--left" onClick={() => dispatch(setEditNote(true))}>
					<Edit />
					<p>Edit</p>
				</button>
			)
		}
	}

// # A paragraph with *emphasis* and **strong importance**.

// > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

// * Lists
// * [ ] todo
// * [x] done

// A table:

// | a | b |
// | - | - |

	return (
		<div className="editor">
			<div className="editor__title">
				<input type="text" placeholder="My first note"/>
			</div>
			<div className="editor__body">
				{
					isEditingNote ?
					<textarea name="editor__body" id="editorNoteBody" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
					:
					<ReactMarkdown className="markdown-editor" plugins={[gfm]} rawSourcePos={true} children={markdown} />
				}
				<div className="editor__controls">
					{renderEditorControls()}
				</div>
			</div>
		</div>
	)
}