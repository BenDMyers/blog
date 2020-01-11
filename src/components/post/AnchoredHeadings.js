import React, {useState} from 'react';
import {useHover} from 'use-hooks';
import {useFocus} from 'use-events';
import {FaAnchor} from 'react-icons/fa';
import GitHubSlugger from 'github-slugger';
import removeEmojis from '../../utils/remove-emojis';

export const Anchor = (props) => {
	let [isFocused, bind] = useFocus();
	const show = props.isHovered || isFocused;
	const showClassName = show ? 'anchor-show' : 'anchor-hide';

	/* Relying on https://github.com/w3c/respec/issues/425 for precedent */
	return (
		<a
			href={`#${props.slug}`}
			className={`anchor ${showClassName}`}
			{...bind}
			aria-label="Permalink"
		>
			<FaAnchor aria-hidden />
		</a>
	);
};

function toSluggable(children) {
	if (typeof children === 'string') {
		return removeEmojis(children);
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

	const AnchoredHeading = (Tag, props) => {
		const sluggable = toSluggable(props.children);
		const [slug] = useState(slugger.slug(sluggable));
		const [ref, isHovered] = useHover();
		return (
			<Tag ref={ref} id={slug}>
				<Anchor slug={slug} isHovered={isHovered} />
				<div className="heading-contents">{props.children}</div>
			</Tag>
		);
	};

	const h2 = (props) => AnchoredHeading('h2', props);
	const h3 = (props) => AnchoredHeading('h3', props);
	const h4 = (props) => AnchoredHeading('h4', props);
	const h5 = (props) => AnchoredHeading('h5', props);
	const h6 = (props) => AnchoredHeading('h6', props);

	return {h2, h3, h4, h5, h6};
};

export default anchoredHeadings;
