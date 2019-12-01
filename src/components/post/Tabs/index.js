import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function createLabelsAndPanels(tabs) {
    const labels = [];
    const panels = [];

    for (let i = 0; i < tabs.length; i++) {
        const {label, contents} = tabs[i];
        labels.push(
            <Tab key={`label-${i}-${label}`}>
                {label}
            </Tab>
        );
        panels.push(
            <TabPanel key={`panel-${i}-${label}`}>
                {contents}
            </TabPanel>
        );
    }

    return {labels, panels};
}

/**
 * Expects `props.tabs` to be `[{label, contents}...]`
 */
const TabbedRegion = ({tabs}) => {
    const {labels, panels} = createLabelsAndPanels(tabs);
    return (
        <Tabs>
            <TabList>
                {labels}
            </TabList>
            {panels}
        </Tabs>
    );
}

export default TabbedRegion;