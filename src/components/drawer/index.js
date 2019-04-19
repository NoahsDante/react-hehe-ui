import classNames from 'classnames';
import RmcDrawer from 'rmc-drawer';
import React from 'react';
import PropTypes from 'prop-types';


import './style/drawer.less';

const propTypes = {
    prefixCls: PropTypes.string,
};
const defaultProps = {
    prefixCls: 'hehe-drawer',
    enableDragHandle: false,
};
const Drawer = React.forwardRef((
  {
      ...props
  }, ref) => {

    return (<RmcDrawer {...props} ref={ref}/>);

});
Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;
export default Drawer;