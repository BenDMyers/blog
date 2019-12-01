import React from 'react';
import TabbedCodeBlock from '../../components/post/Tabs/TabbedCodeBlock';
import {css, jsBeforeAria, htmlWithAriaLabel} from './snippets';

const tabs = [
    {lang: 'html', code: htmlWithAriaLabel, numberLines: true, highlight: [6]},
    {lang: 'css', code: css, numberLines: true},
    {lang: 'js', code: jsBeforeAria, numberLines: true}
];

const TabsWithAriaLabel = () => {
    return <TabbedCodeBlock tabs={tabs} />
}

export default TabsWithAriaLabel;