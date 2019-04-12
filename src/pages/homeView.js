import React from 'react';
import {Link, Route} from 'react-router-dom';
import {List, WingBlank} from 'hehe-mobile';

import FlexView from './FlexView';
import WingBlankView from './WingBlankView';
import WhiteSpaceView from './WhiteSpaceView'


import ListView from './ListView';

const RouteNav = () => {
    const LayoutList = (
        <List renderHeader={'Layout'}>
            <Link to='/flex'>
                <List.Item arrow='horizontal' onClick={() => {
                }}>
                    Flex
                </List.Item>
            </Link>
            <Link to='/wing_blank'>
                <List.Item arrow='horizontal' onClick={() => {
                }}>
                    WingBlank
                </List.Item>
            </Link>
            <Link to='/white_space'>
                <List.Item arrow='horizontal' onClick={() => {
                }}>
                    WhiteSpace
                </List.Item>
            </Link>
        </List>
    );
    const DataDisplayList = (
        <List renderHeader={'Data-Display'}>
            <Link to='/list'>
                <List.Item arrow='horizontal' onClick={() => {
                }}>
                    list
                </List.Item>
            </Link>
        </List>
    );
    const content = (
        <Route path='/' exact render={() => {
            return (
                <>
                    {LayoutList}
                    {DataDisplayList}
                </>
            );
        }}/>
    );
    return content;
}
const RouteContent = () => {
    const LayoutContent = (
        <>
            <Route path='/flex' render={() => {
                return (<FlexView/>);
            }}/>
            <Route path='/wing_blank' render={() => {
                return (<WingBlankView/>);
            }}/>
            <Route path='/white_space' render={() => {
                return (<WhiteSpaceView/>);
            }}/>
        </>
    );
    const DataDisplayContent = (
        <>
            <Route path='/list' render={() => {
                return (<ListView/>);
            }}/>
        </>
    );
    return (
        <>
            {LayoutContent}
            {DataDisplayContent}
        </>
    );
};
const HomeView = () => {
    return (
        <WingBlank size='md'>
            <RouteNav/>
            <RouteContent/>
        </WingBlank>
    );

}
export default HomeView




