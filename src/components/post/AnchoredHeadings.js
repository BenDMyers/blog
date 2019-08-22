import React, {useState} from 'react';
import {useHover} from 'use-hooks';
import {useFocus} from 'use-events';
import {FaAnchor} from 'react-icons/fa';
import GitHubSlugger from 'github-slugger';

export const Anchor = (props) => {
	let [isFocused, bind] = useFocus();
	const show = props.isHovered || isFocused;
	const showClassName = show ? 'anchor-show' : 'anchor-hide';

	return (
		<a
			href={`#${props.slug}`}
			aria-hidden
			className={`anchor ${showClassName}`}
			{...bind}
		>
			<FaAnchor />
		</a>
	);
};

function toSluggable(children) {
	if (typeof children === 'string') {
		return children;
	} else if (Array.isArray(children)) {
		return children.reduce((acc, child) => {
			return acc + toSluggable(child);
		}, '');
	} else if (children.props) {
		return toSluggable(children.props.children);
	} else {
		return '';
	}
}

const anchoredHeadings = () => {
	const slugger = GitHubSlugger();

	const anchoredHeading = (Tag, props) => {
		const sluggable = toSluggable(props.children);
		const [slug] = useState(slugger.slug(sluggable));
		const [ref, isHovered] = useHover();
		return (
			<Tag ref={ref} id={slug}>
				<Anchor slug={slug} isHovered={isHovered} />
				{props.children}
			</Tag>
		);
	};

	const h2 = (props) => anchoredHeading('h2', props);
	const h3 = (props) => anchoredHeading('h3', props);
	const h4 = (props) => anchoredHeading('h4', props);
	const h5 = (props) => anchoredHeading('h5', props);
	const h6 = (props) => anchoredHeading('h6', props);

	return {h2, h3, h4, h5, h6};
};

export default anchoredHeadings;
