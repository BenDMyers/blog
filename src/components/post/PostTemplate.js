import React from 'react';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';

import Bio from '../common/Bio';
import Page from '../common/PageTemplate';
import PostNav from './PostNav';
import Title from './Title';
import {rhythm} from '../../utils/typography';

import './post-template.css';

const PostTemplate = (props) => {
	const post = props.data.mdx;

	return (
		<Page
			location={props.location}
			title={post.frontmatter.title}
			description={post.frontmatter.description || post.excerpt}
		>
			<article>
				<Title {...post.frontmatter} />
				<section className="post-contents">
					<MDXRenderer>{post.body}</MDXRenderer>
				</section>
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
		mdx(fields: {slug: {eq: $slug}}) {
			id
			excerpt(pruneLength: 160)
			body
			frontmatter {
				title
				date(formatString: "YYYY-MM-DD")
				description
				cover
			}
		}
	}
`;
