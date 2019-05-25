import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import TouchFeedback from 'rmc-feedback';

import './style/buttons.less'

const propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.string,
    size: PropTypes.string,
    activeClassName: PropTypes.string,
    activeStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
    ]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    href: PropTypes.string,
    as: PropTypes.string
};
const defaultProps = {
    prefixCls: 'hehe-button',
    activeStyle: {},
    inline: false,
    disabled: false,
    role: 'button'
};
const Button = React.forwardRef(
  ({
       prefixCls,
       className,
       variant,
       inline,
       disabled,
       size,
       as,
       role,
       activeStyle,
       activeClassName,
       onClick,
       ...props
   }, ref) => {
      const wrapCls = classNames(prefixCls, {
          [`${prefixCls}-primary`]: variant === 'primary',
          [`${prefixCls}-ghost`]: variant === 'ghost',
          [`${prefixCls}-warning`]: variant === 'warning',
          [`${prefixCls}-small`]: size === 'small',
          [`${prefixCls}-inline`]: inline,
          [`${prefixCls}-disabled`]: disabled,
      }, className);

      let Component = as || 'a';
      if (!props.href) {
          props.href = '#';
      }
      return (
        <TouchFeedback
          disabled={disabled}
          activeClassName={activeClassName || (activeStyle ? `${prefixCls}-active` : undefined)}
          activeStyle={activeStyle}
        >
            <Component role={role} className={wrapCls}
                       onClick={disabled ? undefined : onClick} {...props} ref={ref}/>
        </TouchFeedback>
      )
  });


Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;