import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import AbstractHeaderButton from './AbstractHeaderButton'

import '../style/headerBar.less'


const propTypes = {
    iconType: PropTypes.string
};
const defaultProps = {
    bsPrefix: 'icon',
    iconType: 'left',
    as: 'a',
    href: '#',
    isVariant: false,
    fill: false,
    direction: false,
};
const HeaderNavIcon = ({iconType, ...props}) => {
    const classes = classNames(
        `icon-${iconType}`
    );
    return (
        <AbstractHeaderButton {...props} className={classes}/>
    );
};

HeaderNavIcon.displayName = 'HeaderNavIcon';
HeaderNavIcon.propTypes = propTypes;
HeaderNavIcon.defaultProps = defaultProps;
export default HeaderNavIcon