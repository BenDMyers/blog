import React from 'react';

const BlogFooter = () => {
	return (
		<footer>
			© <time dateTime="YYYY">{new Date().getFullYear()}</time>, Built
			with <a href="https://www.gatsbyjs.org">Gatsby</a>
		</footer>
	);
};

export default BlogFooter;
