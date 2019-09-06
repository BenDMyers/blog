import React from 'react';
import './blockquote.css';

const Blockquote = (props) => {
	let quote = (
		<blockquote className="quote-contents">{props.children}</blockquote>
	);

	if (props.attribution) {
		quote = (
			<figure className="quote-figure">
				{quote}
				<cite className="quote-attribution">—{props.attribution}</cite>
			</figure>
		);
	}

	return quote;
};

export default Blockquote;
