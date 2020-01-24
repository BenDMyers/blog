import React from 'react';
import {Helmet} from 'react-helmet';

const PostSeo = (props) => {
    let [banner, cover = banner] = props.cover.split('|');
	return (
		<Helmet>
			<meta name="twitter:image" content={cover}></meta>
			<meta name="twitter:image:alt" content={props.coveralt}></meta>
			<meta property="og:image" content={cover}></meta>
			<meta property="og:image:alt" content={props.coveralt}></meta>
		</Helmet>
	);
};

export default PostSeo;
