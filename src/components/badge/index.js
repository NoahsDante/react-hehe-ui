import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import './style/badge.less'

const propTypes = {
    size: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    corner: PropTypes.bool,
    dot: PropTypes.bool,
    overflowCount: PropTypes.number,
    hot: PropTypes.bool
};
const defaultProps = {
    prefixCls: 'hehe-badge',
    size: 'small',
    text: '',
    corner: false,
    dot: false,
    overflowCount: 99,
    hot: false
};
const Badge = React.forwardRef(
  ({
       prefixCls,
       className,
       children,
       dot,
       size,
       text,
       corner,
       hot,
       overflowCount,
       ...props
   }
    , ref) => {
      text = typeof text === 'number' && (text > overflowCount) ? `${overflowCount}+` : text;
      if (dot) {
          text = '';
      }
      const scrollNumberCls = classnames({
          [`${prefixCls}-dot`]: dot,
          [`${prefixCls}-dot-large`]: dot && size === 'large',
          [`${prefixCls}-text`]: !dot && !corner,
          [`${prefixCls}-corner`]: corner,
          [`${prefixCls}-corner-large`]: corner && size === 'large',
      });
      const wrapCls = classnames(prefixCls, className, {
          [`${prefixCls}-not-a-wrapper`]: !children,
          [`${prefixCls}-corner-wrapper`]: corner,
          [`${prefixCls}-hot`]: !!hot,
          [`${prefixCls}-corner-wrapper-large`]: corner && size === 'large',
      });


      return (
        <span className={wrapCls} {...props} ref={ref}>
            {children}
            {(text || dot) && (
              <sup className={scrollNumberCls}>
                  {text}
              </sup>
            )}
        </span>
      );
  });
Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
export default Badge