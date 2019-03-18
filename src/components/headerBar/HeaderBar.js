
import React from 'react';
import PropTypes from 'prop-types';

import '../style/headerBar.less'


const propTypes = {};
const defaultProps = {};

const HeaderBar = React.forwardRef(() => {

    return (<div className={'bar bar-nav'}><h1 className="title">标题</h1></div>)
});
HeaderBar.displayName = 'HeaderBar';
HeaderBar.propTypes = propTypes;
HeaderBar.defaultProps = defaultProps;
export default HeaderBar