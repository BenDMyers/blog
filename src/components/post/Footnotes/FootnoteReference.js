import React from 'react';

const FootnoteReference = ({fn}) => {
	let screenreaderText = `Go to footnote ${fn}`;
	return (
		<a href={`#fn-${fn}`} id={`fn-ref-${fn}`}>
			<span className="screenreader">{screenreaderText}</span>
			<sup aria-hidden="true">{fn}</sup>
		</a>
	);
};

export default FootnoteReference;
