import React from 'react';

const CodeBlockTitle = (props) => {
	return (
		<div className="codeblock-title-wrapper">
			<div className="codeblock-title">{props.title}</div>
		</div>
	);
};

export default CodeBlockTitle;
