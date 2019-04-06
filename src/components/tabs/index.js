import classNames from 'classnames';
import React from 'react';
import {
    DefaultTabBar as RMCDefaultTabBar,
    TabBarPropsType,
    Tabs as RMCTabs,
} from 'rmc-tabs';
import PropTypes from 'prop-types';
import '../style/tabs.less';

export class DefaultTabBar extends RMCDefaultTabBar {
    static defaultProps = {
        ...(RMCDefaultTabBar).defaultProps,
        prefixCls: 'am-tabs-default-bar',
    };
}

const Tabs = React.forwardRef(({className, ...props}, ref) => {

    const renderTabBar = (props) => {
        const { renderTab } = this.props;
        return <DefaultTabBar {...props} renderTab={renderTab} />;
    }


        return <RMCTabs renderTabBar={renderTabBar} {...props} />;

});
Tabs.propTypes = {
    prefixCls: 'hehe-tabs',
    className: PropTypes.string
};
Tabs.defaultProps = DefaultTabBar;

export default Tabs