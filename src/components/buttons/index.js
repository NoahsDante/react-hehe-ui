import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import '../style/buttons.less'

const Button = React.forwardRef(
  ({className, bsPrefix, variant, size, block, active, disabled, href, type, as, ...prop}, ref) => {
      const classes = classNames(
        className,
        bsPrefix,
        `button-${variant}`,
        `button-${size}`,
        block && 'button-block',
        active && 'active',
        disabled && 'disabled',
      );

      const Component = as || 'button';
      return (<Component {...prop} type={type} className={classes} ref={ref}/>)
  });


Button.propTypes = {
    /**
     * 自定义classname
     * */
    className: PropTypes.string,
    /**
     * @default button
     * */
    bsPrefix: PropTypes.string,
    /**
     *  button-light | button-dark | button-success | button-danger | button-warning | button-round
     * */
    variant: PropTypes.string,
    /**
     *  bg
     * */
    size: PropTypes.string,
    /**
     *  父级的宽度 设置成块级元素 button-block
     * */
    block: PropTypes.bool,
    /**
     *  选中状态 \ active
     * */
    active: PropTypes.bool,
    /**
     *  禁止状态
     * */
    disabled: PropTypes.bool,
    /**
     *  button-light | button-dark | button-success | button-danger | button-warning | button-round
     * */
    href: PropTypes.bool,
    /**
     *  button-light | button-dark | button-success | button-danger | button-warning | button-round
     * */
    type: PropTypes.oneOf(['button', 'submit', null]),
    /**
     *  button-light | button-dark | button-success | button-danger | button-warning | button-round
     * */
    as: PropTypes.elementType
};
Button.defaultProps = {
    bsPrefix: 'button',
    type: 'button',
    disabled: false,
    active: false
};
export default Button;