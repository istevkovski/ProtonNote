import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { useDispatch, useSelector } from 'react-redux';
import { createNewNote, removeSelectedNote, setEditNote, setIsLoading, updateNote } from '../actions/generalActions';
import { Cancel, Edit, Save, Trash } from './Icons';
import Loader from './Loader';
import { decrypt } from '../lib/encryptor';

export default function NoteEditor () {
	// General
	const isLoading = useSelector(state => state.general.isLoading);
	const isEditingNote = useSelector(state => state.general.editMode);
	const isNewNote = useSelector(state => state.general.isNewNote);
	const id = useSelector(state => state.general.activeNoteId);
	const note = useSelector(state => state.general.activeNote);
	// Local
	const [title, setTitle] = useState('');
	const [markdown, setMarkdown] = useState('');
	// Tools
	const isFirstRun = useRef(true);
	const dispatch = useDispatch();

	function handleSaveNote () {
		if(isNewNote) dispatch(createNewNote({title, markdown}))
		else dispatch(updateNote(id, title, markdown));
	}

	function handleCancelChanges () {
		if(note) {
			setTitle(note.title);
			setMarkdown(note.markdown);
		} else {
			setTitle('');
			setMarkdown('');
		}
		dispatch(setEditNote(false));
	}

	function handleDeleteNote () {
		dispatch(removeSelectedNote(id))
	}

	function renderEditorControls () {
		if(isEditingNote) {
			return (
				<>
				<button className="button button--icon" onClick={() => handleCancelChanges()}>
					<Cancel />
					<p>Cancel</p>
				</button>
				<div className="group">
					<button className="button button--icon" onClick={() => handleSaveNote()}>
						<Save />
						<p>Save</p>
					</button>
					<button className="button button--icon" onClick={() => handleDeleteNote()}>
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

	function renderEditorBody () {
		if(isLoading) return <Loader />

		if(isEditingNote && !isLoading) {
			return <textarea name="editor__body" id="editorNoteBody" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
		} else {
			return <ReactMarkdown className="markdown-editor" plugins={[gfm]} rawSourcePos={true} children={markdown} />
		}
	}

	useEffect(() => {
		if(isFirstRun.current) { return; }
		const processNoteEncryption = async () => {
			dispatch(setIsLoading(true));
			if(note && !isNewNote) {
				setTitle(note.title);
				const decryptedMarkdown = await decrypt(note.markdown);
				setMarkdown(decryptedMarkdown);
			} else {
				setTitle('');
				setMarkdown('');
			}
			dispatch(setIsLoading(false));
		}
		processNoteEncryption ();
	}, [note, isEditingNote]);

	useEffect(() => {
		if(isFirstRun) { isFirstRun.current = false; }
	}, []);

	return (
		<div className="editor">
			<div className="editor__title">
				<input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
			</div>
			<div className="editor__body">
				{ renderEditorBody() }
				<div className="editor__controls" disabled={isLoading || (note === undefined && !isEditingNote)}>
					{ renderEditorControls() }
				</div>
			</div>
		</div>
	)
}