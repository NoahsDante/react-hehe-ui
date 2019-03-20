import React from 'react';
import PropTypes from 'prop-types';

import AbstractHeaderButton from './AbstractHeaderButton'

import '../style/headerBar.less'


const propTypes = {
    /**
     * 是否填充按钮
     *  @default false
     * */
    fill: PropTypes.bool,
    /**
     * 按钮状态
     *  @default light
     * */
    variant: PropTypes.string,
};
const defaultProps = {
    fill: false,
    variant: 'light',
};
const HeaderNavButton = ({...props}) => {
    return (
        <AbstractHeaderButton {...props}/>
    );
};

HeaderNavButton.displayName = 'HeaderNavButton';
HeaderNavButton.propTypes = propTypes;
HeaderNavButton.defaultProps = defaultProps;
export default HeaderNavButton