import React from 'react';
import moment from 'moment';
import {rhythm} from '../../../utils/typography';
import cover from './cover';

import './PostHeader.css';

const PostHeader = (props) => {
	return (
		<header {...cover(props.cover)}>
			<h1 style={{marginTop: rhythm(1), marginBottom: 0}}>
				{props.title}
			</h1>
			<p className="post-header-date">
				<time dateTime={props.date}>
					{moment(props.date).format('LL')}
				</time>
			</p>
		</header>
	);
};

export default PostHeader;
