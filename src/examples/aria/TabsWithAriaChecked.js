import React from 'react';
import TabbedCodeBlock from '../../components/post/Tabs/TabbedCodeBlock';
import {css, jsWithAriaChecked, htmlWithAriaChecked} from './snippets';

const tabs = [
    {lang: 'html', code: htmlWithAriaChecked, numberLines: true, highlight: [7]},
    {lang: 'css', code: css, numberLines: true},
    {lang: 'js', code: jsWithAriaChecked, numberLines: true, highlight: [18, 19]}
];

const TabsWithAriaChecked = () => {
    return (
        <TabbedCodeBlock
            tabs={tabs}
            defaultIndex={2}
            aria-label="Code snippets for toggle switch using aria-checked"
        />
    );
}

export default TabsWithAriaChecked;