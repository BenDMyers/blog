import React, {useState, useEffect, useRef} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
// import theme from 'prism-react-renderer/themes/oceanicNext';
import theme from './oneDarkPro';

import './code-block.css';
import {rhythm} from '../../../utils/typography';
import CodeBlockTitle from './CodeBlockTitle';

const HIGHLIGHT_RANGE_REGEX = /{([\d,-]+)}/;
const CODE_TITLE_REGEX = /title=([\w|_|-|\d|.]+)/;
const START_LINE_NUMBER_REGEX = /{numberLines: (\d+)/;

const PROMPT_REGEX = /[\w-/~\\:]*[$%#>]/;

const calculateLinesToHighlight = (meta, showLineNumbers) => {
    let firstLine = 1;
    if(parseInt(showLineNumbers)) {
        firstLine = parseInt(showLineNumbers) + 1;
    }
    
	if (meta && HIGHLIGHT_RANGE_REGEX.test(meta)) {
		const lineNumbers = HIGHLIGHT_RANGE_REGEX.exec(meta)[1]
			.split(',')
			.map((v) => v.split('-').map((y) => parseInt(y, 10)));
		return (index) => {
			const lineNumber = index + firstLine;
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

/**
 * Determines whether a codeblock should show line numbers, and if so, which line to start at. 
 * @param {string} metastring Metastring that follows the triple backticks.
 * @returns `true` if the codeblock should show line numbers and start at 1, an integer if you should start elsewhere, and `false` otherwise
 */
const shouldShowLineNumbers = (metastring='') => {
    if (metastring.includes('{numberLines: true}')) {
        return true;
    }

    // Return line number to start at
    if (START_LINE_NUMBER_REGEX.test(metastring)) {
        return START_LINE_NUMBER_REGEX.exec(metastring)[1];
    }
    
    return false;
}

const processProps = (props) => {
	const {children, className, metastring} = props.children.props;
	const language = className.replace(/language-/, '');

	const hlProps = {...defaultProps, code: children, language, theme};
    const showLineNumbers = shouldShowLineNumbers(metastring);
    const shouldHighlightLine = calculateLinesToHighlight(metastring, showLineNumbers);
	const title =
		metastring &&
		CODE_TITLE_REGEX.test(metastring) &&
		CODE_TITLE_REGEX.exec(metastring)[1];

	return [hlProps, showLineNumbers, shouldHighlightLine, title];
};

const toPrompt = (token) => {
    const matches = token.match(/([\w-/~\\:]*)([$%#>])/);
    const [, workingDirectory, prompt] = matches;
    return (
        <>
            {workingDirectory && <span className="terminal-working-directory">{workingDirectory}</span>}
            <span className="terminal-prompt">{prompt} </span>
        </>
    );
}

/**
 * Displays a syntax-highlighted block of code
 * @link https://mdxjs.com/guides/syntax-highlighting
 */
const CodeBlock = (props) => {
    const preRef = useRef(null);
    const [overflowWidth, setOverflowWidth] = useState();
	const [hlProps, showLineNumbers, shouldHighlightLine, title] = processProps(
		props
	);
	const preStyle = {
		width: `calc(100% + ${rhythm(3 / 4)} + ${rhythm(3 / 4)})`,
		marginLeft: `-${rhythm(3 / 4)}`
    };
    
    let firstLine = 1;
    if (parseInt(showLineNumbers)) {
        firstLine = parseInt(showLineNumbers);
    }

    useEffect(() => {
        if(preRef.current) {
            setOverflowWidth(preRef.current.scrollWidth);
        }
    }, [(preRef.current && preRef.current.scrollWidth)])

    const tokenIsPrompt = (token, index) => {
        const {language} = hlProps;
        return index === 0 && (language === 'shell' || language === 'console') && PROMPT_REGEX.test(token.content);
    }

	return (
		<>
			{title && <CodeBlockTitle title={title} />}
			<Highlight {...hlProps}>
				{({className, tokens, getLineProps, getTokenProps}) => (
					/* CREATE CODEBLOCK */
					<pre
						ref={preRef}
						style={preStyle}
						className={`codeblock ${className}`}
					>
						{/* CREATE LINES */}
						{tokens.map((line, i) => {
							// SKIP FINAL, EMPTY LINE
							if (i === tokens.length - 1 && line[0].empty) {
								return null;
                            }
                            
                            let highlightLine = shouldHighlightLine(i) ? 'highlight-line' : '';

							return (
								<div
									key={i}
									{...getLineProps({
										line,
										key: i,
										className: highlightLine,
										style: {
											minWidth: `${overflowWidth}px`
										}
									})}
								>
									{/* RENDER LINE NUMBERS IF APPLICABLE */}
									{showLineNumbers && (
										<span className="line-number">
											<span className="screenreader">
												Line&nbsp;
											</span>
											{i + firstLine}
                                            {highlightLine ?
                                                <span className="screenreader">, highlighted'</span>
                                                : ''
                                            }
                                            &nbsp;
										</span>
									)}
									{!showLineNumbers && (
										<span className="no-line-numbers" />
									)}
									{/* LINE CONTENTS */}
									{line.map((token, index) => {
                                        // console.log(token.content);
                                        if(tokenIsPrompt(token, index)) {
                                            let [promptToken, ...furtherTokens] = token.content.split(' ');
                                            const prompt = toPrompt(promptToken)
                                            return (
                                                <>
                                                    {prompt}
                                                    {furtherTokens.map((furtherToken, furtherTokenIndex) => (
                                                        <span
                                                            key={`${index}-${furtherTokenIndex}`}
                                                            {...getTokenProps({
                                                                token: {...token, content: furtherToken},
                                                                key: `${index}-${furtherTokenIndex}`
                                                            })}
                                                        />))}
                                                </>
                                            );
                                        }
										return (
                                            <span
                                                key={index}
                                                {...getTokenProps({token, key: index})}
                                            />
                                        );
									})}
								</div>
							);
						})}
					</pre>
				)}
			</Highlight>
		</>
	);
	// return <div />;
};

export default CodeBlock;
