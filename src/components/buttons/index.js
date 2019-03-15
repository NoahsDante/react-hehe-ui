import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import '../style/buttons.less'

const Button = React.forwardRef(
    ({className, bsPrefix, variant, size, block, active, disabled, href, type, as, ...prop}, ref) => {
        const classes = classNames(
            className,
            bsPrefix,
            active && 'active',
            disabled && 'disabled',
        );
        const Component = as || 'button';
        return (<Component {...prop} type={type} className={classes} ref={ref}/>)
    });


Button.propTypes = {
    className: PropTypes.string,
    bsPrefix: PropTypes.string,
    variant: PropTypes.string,
    size: PropTypes.string,
    block: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    href: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit', null]),
    as: PropTypes.elementType
};
Button.defaultProps = {
    bsPrefix: 'button',
    type: 'button',
    disabled: false,
    active: false
};
export default Button;