import React from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext';

import './code-block.css';

const HIGHLIGHT_RANGE_REGEX = /{([\d,-]+)}/;

const calculateLinesToHighlight = (meta) => {
	if (HIGHLIGHT_RANGE_REGEX.test(meta)) {
		const lineNumbers = HIGHLIGHT_RANGE_REGEX.exec(meta)[1]
			.split(',')
			.map((v) => v.split('-').map((y) => parseInt(y, 10)));
		return (index) => {
			const lineNumber = index + 1;
			const inRange = lineNumbers.some(([start, end]) =>
				end
					? lineNumber >= start && lineNumber <= end
					: lineNumber === start
			);
			return inRange;
		};
	} else {
		return () => false;
	}
};

const processProps = (props) => {
	const {children, className, metastring} = props.children.props;
	const language = className.replace(/language-/, '');

	const hlProps = {...defaultProps, code: children, language, theme};
	const showLineNumbers = metastring.includes('{numberLines: true}');
	const shouldHighlightLine = calculateLinesToHighlight(metastring);

	return [hlProps, showLineNumbers, shouldHighlightLine];
};

/**
 * Displays a syntax-highlighted block of code
 * @link https://mdxjs.com/guides/syntax-highlighting
 */
const CodeBlock = (props) => {
	const [hlProps, showLineNumbers, shouldHighlightLine] = processProps(props);

	return (
		<Highlight {...hlProps}>
			{({className, tokens, getLineProps, getTokenProps}) => (
				<pre className={`codeblock ${className}`}>
					{tokens.map((line, i) => {
						if (i === tokens.length - 1 && line[0].empty) {
							return null;
						}

						return (
							<div
								key={i}
								{...getLineProps({
									line,
									key: i,
									className: shouldHighlightLine(i)
										? 'highlight-line'
										: ''
								})}
							>
								{showLineNumbers && (
									<span className="line-number">
										<span className="screenreader">
											Line&nbsp;
										</span>
										{i + 1}&nbsp;
									</span>
								)}
								{line.map((token, key) => (
									<span
										key={key}
										{...getTokenProps({token, key})}
									/>
								))}
							</div>
						);
					})}
				</pre>
			)}
		</Highlight>
	);
	// return <div />;
};

export default CodeBlock;
