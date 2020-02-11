import React from 'react';

import BlogFooter from './BlogFooter';
import BlogHeader from './BlogHeader';
import DarkModeToggle from './DarkModeToggle';
import SEO from './Seo';
import {rhythm} from '../../utils/typography';

import './styles.css';

const layoutStyles = {
	maxWidth: rhythm(36),
	padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
};

/**
 * The structure for every page on the blog.
 * Contains a header, contents, and a footer. Simple.
 */
const Page = (props) => {
    let isHomepage = props.location.pathname === '/';
    let pageClass = isHomepage ? 'home' : '';
	return (
		<div className={`layout ${pageClass}`} style={layoutStyles}>
			{isHomepage && <BlogHeader pathname={props.location.pathname} />}
			<DarkModeToggle />
			<SEO title={props.title} description={props.description} />
			<main>{props.children}</main>
			<BlogFooter />
		</div>
	);
};

export default Page;
