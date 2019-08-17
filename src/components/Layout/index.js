import React from 'react';

import BlogFooter from './BlogFooter';
import BlogHeader from './BlogHeader';
import {rhythm} from '../../utils/typography';

import './Layout.css';

const layoutStyles = {
	maxWidth: rhythm(36),
	padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
};

const Layout = ({location, title, children}) => {
	return (
		<div className="layout" style={layoutStyles}>
			<BlogHeader title={title} pathname={location.pathname} />
			<main>{children}</main>
			<BlogFooter />
		</div>
	);
};

export default Layout;
