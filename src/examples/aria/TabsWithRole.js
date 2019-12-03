import React from 'react';
import TabbedCodeBlock from '../../components/post/Tabs/TabbedCodeBlock';
import {css, jsBeforeAria, htmlWithRole} from './snippets';

const tabs = [
    {lang: 'html', code: htmlWithRole, numberLines: true, highlight: [5]},
    {lang: 'css', code: css, numberLines: true},
    {lang: 'js', code: jsBeforeAria, numberLines: true}
];

const TabsWithRole = () => {
    return (
        <TabbedCodeBlock
            tabs={tabs}
            aria-label="Code snippets for toggle switch specifying an ARIA role"
        />
    );
}

export default TabsWithRole;