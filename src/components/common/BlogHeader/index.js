import React from 'react';
import {Link} from 'gatsby';

import {rhythm, scale} from '../../../utils/typography';
import './BlogHeader.css';

const rootPath = `${__PATH_PREFIX__}/`;
const homepageHeaderStyles = {
	...scale(1.5),
	marginBottom: rhythm(1.5),
	marginTop: 0
};

/**
 * Name of blog, with a link to the homepage.
 * Really big on the homepage.
 * Really not big on other pages.
 */
const BlogHeader = ({pathname}) => {
	const homepageHeader = (
		<h1 className="blog-header" style={homepageHeaderStyles}>
			<Link to="/">Ben Myers</Link>
		</h1>
	);

	const otherHeader = (
		<h3 className="blog-header">
			<Link to="/">Ben Myers</Link>
		</h3>
	);

	return (
		<header>{pathname === rootPath ? homepageHeader : otherHeader}</header>
	);
};

export default BlogHeader;
