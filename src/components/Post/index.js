import React from 'react';
import {Link, graphql} from 'gatsby';

import Bio from '../Layout/Bio';
import Layout from '../Layout';
import SEO from '../Layout/Seo';
import {rhythm} from '../../utils/typography';
import PostHeader from './PostHeader';

const BlogPostTemplate = (props) => {
	const post = props.data.markdownRemark;
	const siteTitle = props.data.site.siteMetadata.title;
	const {previous, next} = props.pageContext;

	return (
		<Layout location={props.location} title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<article>
				<PostHeader {...post.frontmatter} />
				<section dangerouslySetInnerHTML={{__html: post.html}} />
				<hr
					style={{
						marginBottom: rhythm(1)
					}}
				/>
				<footer>
					<Bio />
				</footer>
			</article>

			<nav>
				<ul
					style={{
						display: `flex`,
						flexWrap: `wrap`,
						justifyContent: `space-between`,
						listStyle: `none`,
						padding: 0
					}}
				>
					<li>
						{previous && (
							<Link to={previous.fields.slug} rel="prev">
								<span className="screenreader">
									Previous post: {previous.frontmatter.title}
								</span>
								<span aria-hidden="true">
									← {previous.frontmatter.title}
								</span>
							</Link>
						)}
					</li>
					<li>
						{next && (
							<Link to={next.fields.slug} rel="next">
								<span className="screenreader">
									Next post: {next.frontmatter.title}
								</span>
								<span aria-hidden="true">
									{next.frontmatter.title} →
								</span>
							</Link>
						)}
					</li>
				</ul>
			</nav>
		</Layout>
	);
};

export default BlogPostTemplate;

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
