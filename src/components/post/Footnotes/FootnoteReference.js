import React from 'react';

const FootnoteReference = ({fn}) => {
	return (
		<a href={`#fn-${fn}`} id={`fn-ref-${fn}`}>
			<span className="screenreader">Go to footnote </span>
			<sup>{fn}</sup>
		</a>
	);
};

export default FootnoteReference;
