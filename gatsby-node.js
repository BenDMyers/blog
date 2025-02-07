const path = require(`path`);
const {createFilePath} = require(`gatsby-source-filesystem`);

exports.createPages = async ({graphql, actions}) => {
	const {createPage} = actions;

	const blogPost = path.resolve(`./src/components/post/PostTemplate.js`);
	const result = await graphql(
		`
			{
				allMdx(
					sort: {
                        fields: [frontmatter___date, frontmatter___title]
                        order: [DESC, DESC]
                    }
					limit: 1000
				) {
					edges {
						node {
							fields {
								slug
							}
							frontmatter {
								title
							}
						}
					}
				}
			}
		`
	);

	if (result.errors) {
		throw result.errors;
	}

	// Create blog posts pages.
	const posts = result.data.allMdx.edges;

	posts.forEach((post, index) => {
		const previous =
			index === posts.length - 1 ? null : posts[index + 1].node;
		const next = index === 0 ? null : posts[index - 1].node;

		createPage({
			path: post.node.fields.slug,
			component: blogPost,
			context: {
				slug: post.node.fields.slug,
				previous,
				next
			}
		});
	});
};

exports.onCreateNode = ({node, actions, getNode}) => {
	const {createNodeField} = actions;
	// We only want to operate on `Mdx` nodes
	if (node.internal.type === 'Mdx') {
		const value = createFilePath({node, getNode});
		createNodeField({
			// Name of the field you are adding
			name: 'slug',
			// Individual MDX node
			node,
			// Generated value based on filepath
			value
		});
	}
};
