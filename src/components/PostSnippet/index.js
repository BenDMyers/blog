import React from 'react';
import {Link} from 'gatsby';
import moment from 'moment';

import {rhythm} from '../../utils/typography';
import './PostSnippet.css';

const PostSnippet = ({excerpt, fields, frontmatter}) => {
	const title = frontmatter.title || fields.slug;
	return (
		<article className="post-snippet">
			<header>
				<h3
					className="post-snippet-title"
					style={{
						marginBottom: rhythm(1 / 4)
					}}
				>
					<Link to={fields.slug}>{title}</Link>
				</h3>
				<small>
					<time dateTime={frontmatter.date}>
						{moment(frontmatter.date).format('LL')}
					</time>
				</small>
			</header>
			<section>
				<p
					dangerouslySetInnerHTML={{
						__html: frontmatter.description || excerpt
					}}
				/>
			</section>
		</article>
	);
};

export default PostSnippet;
