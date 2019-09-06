import React from 'react';

/**
 * Copyright and powered-by.
 */
const BlogFooter = () => {
	return (
		<footer className="copyright">
			© <time dateTime="YYYY">{new Date().getFullYear()}</time>, Built
			with <a href="https://www.gatsbyjs.org">Gatsby</a>
		</footer>
	);
};

export default BlogFooter;
