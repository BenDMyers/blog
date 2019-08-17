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

const BlogHeader = ({pathname, title}) => {
	const homepageHeader = (
		<h1 className="blog-header" style={homepageHeaderStyles}>
			<Link to="/">{title}</Link>
		</h1>
	);

	const otherHeader = (
		<h3 className="blog-header">
			<Link to="/">{title}</Link>
		</h3>
	);

	return (
		<header>{pathname === rootPath ? homepageHeader : otherHeader}</header>
	);
};

export default BlogHeader;
