import React, {useState} from 'react';
import {useHover} from 'use-hooks';
import {useFocus} from 'use-events';
import {FaAnchor} from 'react-icons/fa';
import GitHubSlugger from 'github-slugger';

const Anchor = (props) => {
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

const anchoredHeadings = () => {
	const slugger = GitHubSlugger();

	const h2 = (props) => {
		let [slug] = useState(slugger.slug(props.children));
		let [ref, isHovered] = useHover();
		return (
			<h2 ref={ref} id={slug}>
				<Anchor slug={slug} isHovered={isHovered} />
				{props.children}
			</h2>
		);
	};

	return {h2};
};

export default anchoredHeadings;
