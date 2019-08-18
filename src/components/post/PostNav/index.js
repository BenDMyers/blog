import React from 'react';
import {Link} from 'gatsby';
import './post-nav.css';

const PostNav = ({previous, next}) => {
	return (
		<nav>
			<ul className="post-nav">
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
	);
};

export default PostNav;
