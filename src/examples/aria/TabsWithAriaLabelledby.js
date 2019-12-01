import React from 'react';
import TabbedCodeBlock from '../../components/post/Tabs/TabbedCodeBlock';
import {css, jsBeforeAria, htmlWithAriaLabelledby} from './snippets';

const tabs = [
    {lang: 'html', code: htmlWithAriaLabelledby, numberLines: true, highlight: [2, 6]},
    {lang: 'css', code: css, numberLines: true},
    {lang: 'js', code: jsBeforeAria, numberLines: true}
];

const TabsWithAriaLabelledby = () => {
    return <TabbedCodeBlock tabs={tabs} />
}

export default TabsWithAriaLabelledby;