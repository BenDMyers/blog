import React from 'react';
import {graphql} from 'gatsby';

import Bio from '../common/Bio';
import Page from '../common/PageTemplate';
import PostNav from './PostNav';
import Title from './Title';
import {rhythm} from '../../utils/typography';

const PostTemplate = (props) => {
	const post = props.data.markdownRemark;

	return (
		<Page
			location={props.location}
			title={post.frontmatter.title}
			description={post.frontmatter.description || post.excerpt}
		>
			<article>
				<Title {...post.frontmatter} />
				<section dangerouslySetInnerHTML={{__html: post.html}} />
				<hr style={{marginBottom: rhythm(1)}} />
				<footer>
					<Bio />
				</footer>
			</article>
			<PostNav
				previous={props.pageContext.previous}
				next={props.pageContext.next}
			/>
		</Page>
	);
};

export default PostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		markdownRemark(fields: {slug: {eq: $slug}}) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "YYYY-MM-DD")
				description
				cover
			}
		}
	}
`;
