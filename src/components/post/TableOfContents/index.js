import React from 'react';
import {useHover} from 'use-hooks';
import {Anchor} from '../AnchoredHeadings';
import './table-of-contents.css';

const TableOfContents = (props) => {
	function toListItem(node) {
		// Handle skip of <h1> elements
		if (node.items && !node.title) {
			return node.items.map(toListItem);
		}

		const children = node.items && node.items.map(toListItem);
		return (
			<li key={node.title}>
				<a href={node.url}>{node.title}</a>
				{children && <ol>{children}</ol>}
			</li>
		);
	}

	const headingList = toListItem(props.headings);
	const [ref, isHovered] = useHover();
	const tocHeading = (
		<h2 ref={ref} id="toc" className="toc-heading">
			<Anchor slug="toc" isHovered={isHovered} />
			Table of Contents
		</h2>
	);

	return (
		<React.Fragment>
			{tocHeading}
			<ol className="toc-list">{headingList}</ol>
		</React.Fragment>
	);
};

export default TableOfContents;
