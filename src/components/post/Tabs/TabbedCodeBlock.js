import React from 'react';
import Tabs from './index';
import CodeBlock from '../CodeBlock';

const ProppedFragment = (props) => {
    return (
        <>
            {props.children}
        </>
    );
}

function mapToTabSchema(tabs) {
    return tabs.map(tab => {
        let label = tab.label || tab.lang.toUpperCase();

        let metastring = '';
        tab.numberLines && (metastring += `{numberLines: ${tab.numberLines}}`);
        tab.highlight && (metastring += `{${tab.highlight.join(',')}}`);

        let codeblock = (
            <CodeBlock>
                <ProppedFragment
                    className={`language-${tab.lang}`}
                    metastring={metastring}
                >
                    {tab.code}
                </ProppedFragment>
            </CodeBlock>
        );

        return {label, contents: codeblock};
    })
}

/**
 * Expects `props.tabs` to be `[{lang, code, label?, numberLines?, highlightLines?}...]`
 */
const TabbedCodeBlock = ({tabs}) => {
    let mappedTabs = mapToTabSchema(tabs);
    return <Tabs tabs={mappedTabs} />;
}

export default TabbedCodeBlock;