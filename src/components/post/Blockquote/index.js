import React from 'react';
import './blockquote.css';

const Blockquote = (props) => {
	return (
		<blockquote>
			<p className="quote-contents">{props.children}</p>
			{props.attribution && (
				<cite className="quote-attribution">{props.attribution}</cite>
			)}
		</blockquote>
	);
};

export default Blockquote;
