import React from 'react';
import {loremIpsum} from 'lorem-ipsum';

const Lorem = (props) => {
	const numParagraphs = props.paragraphs || 1;
	const paragraphs = [];
	for (let i = 0; i < numParagraphs; i++) {
		paragraphs.push(
			<p key={`lorem-${i}`}>
				{loremIpsum({
					count: numParagraphs,
					paragraphLowerBound: 2,
					paragraphUpperBound: 3,
					units: 'paragraphs'
				})}
			</p>
		);
	}

	return paragraphs;
};

export default Lorem;
