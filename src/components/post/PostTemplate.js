import React from 'react';
import {graphql} from 'gatsby';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';

import Bio from '../common/Bio';
import Page from '../common/PageTemplate';
import anchoredHeadings from './AnchoredHeadings';
import Lorem from './Lorem';
import PostNav from './PostNav';
import TOC from './TableOfContents';
import Title from './Title';
import {rhythm} from '../../utils/typography';

import './post-template.css';

const PostTemplate = (props) => {
	const post = props.data.mdx;
	const layoutComponents = {
		...anchoredHeadings(),
		Lorem,
		TOC: () => <TOC headings={post.tableOfContents} />
	};

	console.log(post.tableOfContents);

	return (
		<Page
			location={props.location}
			title={post.frontmatter.title}
			description={post.frontmatter.description || post.excerpt}
		>
			<article>
				<Title {...post.frontmatter} />
				<section className="post-contents">
					<MDXProvider components={layoutComponents}>
						<MDXRenderer>{post.body}</MDXRenderer>
					</MDXProvider>
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
			tableOfContents
			frontmatter {
				title
				date(formatString: "YYYY-MM-DD")
				description
				cover
			}
		}
	}
`;
