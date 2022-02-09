const { registerBlockType } = wp.blocks;

const edit = () => {
	return (
		<div>Hello World</div>
	)
}

registerBlockType('blockify/blurb', {
	title: 'Blurb',
	description: 'A Blockify Blurb Block',
	icon: 'smiley',
	category: 'layout',
	attributes: {},
	edit: edit,
	save: save,
})
