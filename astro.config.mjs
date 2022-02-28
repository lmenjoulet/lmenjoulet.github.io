//@ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	renderers: ['@astrojs/renderer-svelte'],
	markdownOptions: {
		render: [
			'@astrojs/markdown-remark',
			{

			}
		],
	}
});
