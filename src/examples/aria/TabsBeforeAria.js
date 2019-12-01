import React from 'react';
import TabbedCodeBlock from '../../components/post/Tabs/TabbedCodeBlock';
import {htmlBeforeAria, css, jsBeforeAria} from './snippets';

const tabs = [
    {lang: 'html', code: htmlBeforeAria, numberLines: true},
    {lang: 'css', code: css, numberLines: true},
    {lang: 'js', code: jsBeforeAria, numberLines: true}
];

const TabsBeforeAria = () => {
    return (
        <TabbedCodeBlock
            tabs={tabs}
            aria-label="Code snippets for toggle switch before ARIA" 
        />
    );
}

export default TabsBeforeAria;