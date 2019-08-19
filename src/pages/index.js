import React from 'react';
import {graphql} from 'gatsby';

import Bio from '../components/common/Bio';
import Page from '../components/common/PageTemplate';
import PostSnippet from '../components/homepage/PostSnippet';

/**
 * Blog homepage, which displays a list of post snippets
 */
const BlogIndex = (props) => {
	const {data} = props;
	const posts = data.allMdx.edges;
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
		<Page location={props.location} title="Posts">
			<Bio />
			{snippets}
		</Page>
	);
};

export default BlogIndex;

export const pageQuery = graphql`
	query {
		allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
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
						emoji
					}
				}
			}
		}
	}
`;
