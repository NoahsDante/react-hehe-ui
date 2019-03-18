
import React from 'react';
import PropTypes from 'prop-types';

import '../style/headerBar.less'


const propTypes = {};
const defaultProps = {};

const HeaderNav = React.forwardRef(() => {

    return (<div className={'bar bar-nav'}><h1 className="title">标题</h1></div>)
});
HeaderNav.displayName = 'HeaderBar';
HeaderNav.propTypes = propTypes;
HeaderNav.defaultProps = defaultProps;
export default HeaderNav