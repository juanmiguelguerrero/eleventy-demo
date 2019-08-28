module.exports = function (eleventyConfig) {

	eleventyConfig.addPassthroughCopy('src/images')
	eleventyConfig.addPassthroughCopy('src/css/assets')
	eleventyConfig.addPassthroughCopy('src/admin/config.yml')
	// TODO: Incluir archivos configuración redirecciones Netlify

	eleventyConfig.addCollection("postsOrdenados", function (collection) {
		return collection.getFilteredByTag("posts").reverse()
	});

	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: "_includes",
			data: '_data'
		},
		passthroughFileCopy: true,
		templateFormats: ['njk', 'md', 'html', 'css', 'js'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk'
	}
}