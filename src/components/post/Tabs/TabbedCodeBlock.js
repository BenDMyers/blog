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

        let newTab = {label, contents: codeblock};

        tab.highlight && (newTab.labelClass = 'contains-highlights');

        return newTab;
    })
}

/**
 * Expects `props.tabs` to be `[{lang, code, label?, numberLines?, highlightLines?}...]`
 */
const TabbedCodeBlock = ({tabs, ...props}) => {
    let mappedTabs = mapToTabSchema(tabs);
    return <Tabs tabs={mappedTabs} {...props} />;
}

export default TabbedCodeBlock;