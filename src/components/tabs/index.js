import React from 'react';
import {
    DefaultTabBar as RMCDefaultTabBar,
    Tabs as RMCTabs,
} from 'rmc-tabs';
import PropsTypes from 'prop-types';


import './style/tabs.less';

const propTypes = {
    prefixCls: PropsTypes.string,

};

const defaultProps = {
    prefixCls: 'hehe-tabs',
};

export class DefaultTabBar extends RMCDefaultTabBar {
    static defaultProps = {
        ...RMCDefaultTabBar.defaultProps,
        prefixCls: 'hehe-tabs-default-bar',
    };
}

const Tabs = React.forwardRef(({...props}, ref) => {
    const renderTabBar = (TabBarProps) => {
        const {renderTab} = props;
        return <DefaultTabBar {...TabBarProps} renderTab={renderTab}/>;
    }
    return (
      <RMCTabs renderTabBar={renderTabBar} {...props} ref={ref}/>
    );
});

Tabs.defaultProps = defaultProps;
Tabs.propTypes = propTypes;

export default Tabs;
