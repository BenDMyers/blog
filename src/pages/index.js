import React from 'react';
import {graphql} from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostSnippet from '../components/PostSnippet';

const BlogIndex = (props) => {
	const {data} = props;
	const siteTitle = data.site.siteMetadata.title;
	const posts = data.allMarkdownRemark.edges;
	const snippets = posts.map(({node}, index, {length}) => {
		const snippet = <PostSnippet key={node.fields.slug} {...node} />;
		return index < length - 1 ? (
			<React.Fragment key={node.fields.slug}>
				{snippet}
				<hr className="post-snippet-divider" />
			</React.Fragment>
		) : (
			snippet
		);
	}, []);

	return (
		<Layout location={props.location} title={siteTitle}>
			<SEO title="Posts" />
			<Bio />
			{snippets}
		</Layout>
	);
};

export default BlogIndex;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "YYYY-MM-DD")
						title
						description
					}
				}
			}
		}
	}
`;
