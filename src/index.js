const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const { Container, Row, Col } = require('react-bootstrap');

import './index.css';

const edit = ({ attributes, setAttributes }) => {

	const { title, body } = attributes;

	const updateTitle = newTitle => {
		setAttributes({ title: newTitle })
	}

	const updateBody = newBody => {
		setAttributes({ body: newBody });
	}

	return (
		<section className="text-center">
			<Container>
				<Row>
					<Col sm={{ span: 6, offset: 3 }}>
						<RichText
							key="editable"
							tagName="h2"
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
					</Col>
				</Row>
			</Container>
		</section>
	);
}

const save = ({ attributes }) => {
	return (
		<section className="text-center">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 offset-sm-3">
						<h4>{attributes.title}</h4>
						<p>{attributes.body}</p>
					</div>
				</div>
			</div>
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
			selector: 'h2'
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
