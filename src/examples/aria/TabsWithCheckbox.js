import React from 'react';
import TabbedCodeBlock from '../../components/post/Tabs/TabbedCodeBlock';
import {htmlWithCheckbox, cssWithCheckbox, jsWithCheckbox} from './snippets';

const tabs = [
    {lang: 'html', code: htmlWithCheckbox, numberLines: true, highlight: [`2-13`]},
    {lang: 'css', code: cssWithCheckbox, numberLines: true, highlight: ['1-12', 48]},
    {lang: 'js', code: jsWithCheckbox, numberLines: true, highlight: [1, 20]}
];

const TabsWithCheckbox = () => {
    return (
        <TabbedCodeBlock
            tabs={tabs}
            aria-label="Code snippets for toggle switch using a semantic checkbox" 
        />
    );
}

export default TabsWithCheckbox;