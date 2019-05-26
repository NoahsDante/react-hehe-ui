import classnames from 'classnames';
import React from 'react';

import TouchFeedback from 'rmc-feedback';

import PropTypes from 'prop-types';

const propTypes = {
    prefixCls: PropTypes.string,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    align: PropTypes.oneOf(['top', 'middle', 'bottom']),
    multipleLine: PropTypes.bool,
    wrap: PropTypes.bool,
    arrow: PropTypes.oneOf(['horizontal', 'vertical', 'vertical-up'])
};
const defaultProps = {
    prefixCls: 'hehe-list',
    align: 'middle',
    error: false,
    multipleLine: false,
    wrap: false,
};
const ListItem = React.forwardRef(
  ({
       prefixCls,
       className,
       error,
       disabled,
       align,
       multipleLine,
       wrap,
       thumb,
       children,
       extra,
       arrow,
       onClick,
       ...props
   }, ref) => {


      const wrapCls = classnames(
        `${prefixCls}-item`,
        className,
        {
            [`${prefixCls}-item-disabled`]: disabled,
            [`${prefixCls}-item-error`]: error,
        },
        align && `${prefixCls}-item-${align}`
      );

      const lineCls = classnames(
        `${prefixCls}-line`,
        {
            [`${prefixCls}-line-multiple`]: multipleLine,
            [`${prefixCls}-line-wrap`]: wrap,
        }
      );
      const arrowCls = classnames(
        `${prefixCls}-arrow`,
        arrow && `${prefixCls}-arrow-${arrow}`,
      );
      const content = (
        <div className={wrapCls} ref={ref} onClick={onClick} {...props}>
            {thumb ? (
              <div className={`${prefixCls}-thumb`}>
                  {typeof thumb === 'string' ? <img src={thumb} alt=''/> : thumb}
              </div>
            ) : null}
            <div className={lineCls}>
                {children && (
                  <div className={`${prefixCls}-content`}>{children}</div>
                )}
                {extra && (
                  <div className={`${prefixCls}-extra`}>
                      {extra}
                  </div>
                )}
                {arrow && (<div className={arrowCls}></div>)}
            </div>
        </div>
      );
      const touchProps = {};
      Object.keys(props).forEach(key => {
          if (/onTouch/i.test(key)) {
              touchProps[key] = props[key];
              delete props[key];
          }
      });
      return (
        <TouchFeedback
          {...touchProps}
          disabled={disabled || !onClick}
          activeClassName={`${prefixCls}-item-active`}
        >
            {content}
        </TouchFeedback>
      );
  });
ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;
export default ListItem