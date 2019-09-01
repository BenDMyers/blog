import React from 'react';
import './footnotes.css';

const Footnote = (props) => {
	let footnoteContents = [];
	props.author && footnoteContents.push(props.author);
	props.publication && footnoteContents.push(<i>{props.publication}</i>);
	props.url
		? footnoteContents.push(
				<a href={props.url}>
					<i>{props.title}</i>
				</a>
		  )
		: footnoteContents.push(<i>{props.title}</i>);
	footnoteContents = footnoteContents.reduce(
		(contents, element, index, {length}) => {
			contents.push(element);
			index < length - 1 && contents.push(', ');
			return contents;
		},
		[]
	);

	return (
		<React.Fragment>
			<span>{props.children || footnoteContents}</span>
			<span aria-hidden="true" className="footnote-pipe">
				|
			</span>
			<a className="back-to-reference-arrow" href={`#fn-ref-${props.fn}`}>
				<span className="screenreader">
					Return to reference {props.fn}
				</span>
				<span aria-hidden="true">↩</span>
			</a>
		</React.Fragment>
	);
};

export default Footnote;
