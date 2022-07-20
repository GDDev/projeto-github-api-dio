import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
    list-style: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    box-shadow: 0 0 1em #ccc;
    z-index: 9999;
    border-collapse: collapse;
    background-image: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .1));
    margin: 8px;

    &:focus{
        outline: none;
    }

    &.is-selected{
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: none;
    }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    margin-top: -5px;
    border-collapse: collapse;
    border: none;
    padding: 16px;
    
    &.is-selected{
        display: block;
    }
`;

WrapperTabPanel.tabsRole = "TabPanel";