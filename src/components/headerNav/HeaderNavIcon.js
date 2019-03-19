import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import AbstractHeaderButton from './AbstractHeaderButton'

import '../style/headerBar.less'


const propTypes = {
    className:PropTypes.string
};
const defaultProps = {
};
const HeaderNavIcon =({...props}) => {
    return (
        <AbstractHeaderButton {...props} bsPrefix={'icon icon-left'} as='a' href={'#'}/>
    );
};

HeaderNavIcon.displayName = 'HeaderNavIcon';
HeaderNavIcon.propTypes = propTypes;
HeaderNavIcon.defaultProps = defaultProps;
export default HeaderNavIcon