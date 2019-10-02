import React from 'react';
import {rhythm} from '../../../../utils/typography';

const CodeBlockTitle = (props) => {
	let style = {
		marginLeft: `-${rhythm(3 / 4)}`
	};

	return (
		<div style={style} className="codeblock-title-wrapper">
			<div className="codeblock-title">{props.title}</div>
		</div>
	);
};

export default CodeBlockTitle;
