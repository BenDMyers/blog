import React from 'react';
import {Helmet} from 'react-helmet';

const PostSeo = (props) => {
	return (
		<Helmet>
			<meta name="twitter:image" content={props.cover}></meta>
			<meta name="twitter:image:alt" content={props.coveralt}></meta>
			<meta property="og:image" content={props.cover}></meta>
			<meta property="og:image:alt" content={props.coveralt}></meta>
		</Helmet>
	);
};

export default PostSeo;
