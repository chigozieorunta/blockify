const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

const edit = ({ attributes, setAttributes }) => {

	const { title, body } = attributes;

	const updateTitle = newTitle => {
		setAttributes({ title: newTitle });
	}

	const updateBody = newBody => {
		setAttributes({ body: newBody });
	}

	return (
		<section>
			<RichText
				key="editable"
				tagName="h4"
				placeholder="Blurb Title"
				value={title}
				onChange={updateTitle}
			/>
			<RichText
				key="editable"
				tagName="p"
				placeholder="Blurb Body"
				value={body}
				onChange={updateBody}
			/>
		</section>
	);
}

const save = ({ attributes }) => {

	const { title, body } = attributes;

	return (
		<section>
			<h4>{title}</h4>
			<RichText.Content
				tagName="p"
				value={body}
			/>
		</section>
	);
}

registerBlockType('blockify/blurb', {
	title: 'Blurb',
	description: 'A Blockify Blurb Block',
	icon: 'smiley',
	category: 'layout',
	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: 'h4'
		},
		body: {
			type: 'string',
			source: 'html',
			selector: 'p'
		},
	},
	edit: edit,
	save: save,
})
