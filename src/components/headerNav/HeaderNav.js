import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import HeaderNavButton from './HeaderNavButton';
import HeaderNavIcon from './HeaderNavIcon';

import '../style/headerBar.less'


const propTypes = {
    className:PropTypes.string,
    title:PropTypes.string,

};
const defaultProps = {
    title:'标题',
};
const HeaderNav = React.forwardRef(({className,title,children,...props},ref) => {
    const classes = classNames(
        'bar',
        'bar-nav',
        className
    );
    return (
        <header {...props} className={classes} ref={ref}>
            {children}
            {title ? <h1 className='title'>{title}</h1>:''}
        </header>
    )
});

HeaderNav.displayName = 'HeaderNav';
HeaderNav.propTypes = propTypes;
HeaderNav.defaultProps = defaultProps;

HeaderNav.Buttons = HeaderNavButton;
HeaderNav.Icon = HeaderNavIcon;
export default HeaderNav