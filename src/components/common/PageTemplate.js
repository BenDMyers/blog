import React from 'react';

import BlogFooter from './BlogFooter';
import BlogHeader from './BlogHeader';
import SEO from './Seo';
import {rhythm} from '../../utils/typography';
import useThemeDebugging from '../../utils/use-theme-debugging';

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
	const theme = useThemeDebugging('light');

	return (
		<div data-theme={theme} className="layout" style={layoutStyles}>
			<BlogHeader pathname={props.location.pathname} />
			<SEO title={props.title} description={props.description} />
			<main>{props.children}</main>
			<BlogFooter />
		</div>
	);
};

export default Page;
