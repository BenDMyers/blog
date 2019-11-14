import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Bio from '../common/Bio';
import Page from '../common/PageTemplate';
import anchoredHeadings from './AnchoredHeadings';
import Blockquote from './Blockquote';
import CodeBlock from './CodeBlock';
import Footnote from './Footnotes/Footnote';
import FootnoteReference from './Footnotes/FootnoteReference';
import FootnotesContainer from './Footnotes/FootnotesContainer';
import Lorem from './Lorem';
import PostNav from './PostNav';
import PostSeo from './PostSeo';
import TOC from './TableOfContents';
import Title from './Title';
import Tweet from './Tweet';
import Video from './Video';
import WideImage from './WideImage';
import { rhythm } from '../../utils/typography';

import './post-template.css';
import Share from './Share';

const PostTemplate = (props) => {
    const post = props.data.mdx;
    const layoutComponents = {
        ...anchoredHeadings(),
        blockquote: Blockquote,
        Blockquote,
        Fn: FootnoteReference,
        Footnote,
        FootnotesContainer,
        hr: () => <hr role="presentation" />,
        Lorem,
        pre: (props) => <CodeBlock {...props} />,
        TOC: (props) => <TOC headings={post.tableOfContents} {...props} />,
        Tweet,
        Video,
        WideImage
    };

    return (
        <Page
            location={props.location}
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
        >
            <PostSeo {...post.frontmatter} />
            <article>
                <Title {...post.frontmatter} />
                <section className="post-contents">
                    <MDXProvider components={layoutComponents}>
                        <MDXRenderer>{post.body}</MDXRenderer>
                    </MDXProvider>
                </section>
                <hr
                    style={{
                        marginBottom: rhythm(1),
                        backgroundColor: 'var(--text-color)',
                        opacity: 0.33
                    }}
                />
                <footer>
                    <Bio className="in-post" />
                    <Share
                        page={post.fields.slug}
                        pageTitle={post.frontmatter.title}
                    />
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
				coveralt
			}
			fields {
				slug
			}
		}
	}
`;
