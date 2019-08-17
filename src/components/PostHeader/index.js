import React from 'react';
import moment from 'moment';
import {rhythm, scale} from '../../utils/typography';
import cover from './cover';

import './PostHeader.css';

const PostHeader = (props) => {
	return (
		<header {...cover(props.cover)}>
			<h1 style={{marginTop: rhythm(1), marginBottom: 0}}>
				{props.title}
			</h1>
			<p
				style={{
					...scale(-1 / 5),
					display: `block`,
					marginBottom: rhythm(1)
				}}
			>
				<time dateTime={props.date}>
					{moment(props.date).format('LL')}
				</time>
			</p>
		</header>
	);
};

export default PostHeader;
