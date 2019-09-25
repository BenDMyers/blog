import React from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import './code-block.css';

/**
 * Displays a syntax-highlighted block of code
 * @link https://mdxjs.com/guides/syntax-highlighting
 */
const CodeBlock = (props) => {
	console.log(props, defaultProps);
	const {children, className, metastring} = props.children.props;
	const language = className.replace(/language-/, '');
	const showLineNumbers = metastring.includes('numberLines');
	return (
		<Highlight
			{...defaultProps}
			code={children}
			language={language}
			theme={theme}
		>
			{({className, tokens, getLineProps, getTokenProps}) => (
				<pre className={`codeblock ${className}`}>
					{tokens.map((line, i) => {
						if (i === tokens.length - 1 && line[0].empty) {
							return null;
						}

						return (
							<div key={i} {...getLineProps({line, key: i})}>
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
