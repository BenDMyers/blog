import React from 'react';
import moment from 'moment';
import {rhythm} from '../../../utils/typography';
import cover from './cover';

import './PostHeader.css';

/**
 * The post title, superimposed on an image.
 */
const PostHeader = (props) => {
	return (
		<header {...cover(props.cover)}>
			<h1 style={{marginTop: rhythm(1), marginBottom: 0, color: 'white'}}>
				{props.title}
			</h1>
			<p className="post-header-date">
				<time itemProp="datePublished" dateTime={props.date}>
					{moment(props.date).format('LL')}
				</time>
			</p>
		</header>
	);
};

export default PostHeader;
