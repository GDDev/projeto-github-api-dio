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

    &:hover{
        transform: scale(105%);
    }

    &.is-selected{
        border-bottom-right-radius: 0;
        border-bottom: none;
    }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    border-collapse: collapse;
    border: none;
    padding: 16px;
    width: fit-content;
    padding: auto;
    margin-top: -.8em;
    margin-left: .7em;
    background-image: linear-gradient(to right, rgba(0, 0, 0, .05), #fff);
    border-radius: 20px;
    
    &.is-selected{
        display: block;
    }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;