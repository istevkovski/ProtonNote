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
`---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading`
		},
		{
			title: "Blockquotes!",
			markdown:
`## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.`
		},
		{
			title: "Code",
			markdown:
`## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\``
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