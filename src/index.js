const { registerBlockType } = wp.blocks;
const { PanelBody } = wp.components;
const {
	RichText,
	InspectorControls,
	ColorPalette
} = wp.blockEditor;

const edit = ({ attributes, setAttributes }) => {

	const {
		title,
		body,
		titleColor
	} = attributes;

	const updateTitle = newTitle => {
		setAttributes({ title: newTitle });
	}

	const updateFootnote = newFootnote => {
		setAttributes({ footnote: newFootnote });
	}

	const updateBody = newBody => {
		setAttributes({ body: newBody });
	}

	return (
		<>
			<InspectorControls>

			</InspectorControls>
			<section>
				<RichText
					key="editable"
					tagName="h4"
					placeholder="Blurb Title"
					value={title}
					onChange={updateTitle}
					style={{color: titleColor}}
				/>
				<RichText
					key="editable"
					tagName="h6"
					placeholder="Blurb Footnote"
					value={footnote}
					onChange={updateFootnote}
				/>
				<RichText
					key="editable"
					tagName="p"
					placeholder="Blurb Body"
					value={body}
					onChange={updateBody}
				/>
			</section>
		</>
	);
}

const save = ({ attributes }) => {

	const { title, body } = attributes;

	return (
		<section>
			<h4>{title}</h4>
			<h6>{footnote}</h6>
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
		titleColor: {
			type: 'string',
			default: 'black'
		},
		footnote: {
			type: 'string',
			source: 'html',
			selector: 'h6'
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
