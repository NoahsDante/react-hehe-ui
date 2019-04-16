import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    thumbStyle: PropTypes.object,
    thumb: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ])
};
const defaultProps = {
    prefixCls: 'hehe-card',
    thumbStyle: {}
};
const CardHeader = React.forwardRef(
  ({
       prefixCls,
       className,
       title,
       thumb,
       thumbStyle,
       extra,
       ...props
   }, ref) => {
      const wrapCls = classnames(`${prefixCls}-header`, className);

      return (
        <div className={wrapCls} {...props} ref={ref}>
            <div className={`${prefixCls}-header-content`}>
                {typeof thumb === 'string' ? (<img style={thumbStyle} src={thumb} alt=''/>) : (thumb)}
                {title}
            </div>
            {extra ? (<div className={`${prefixCls}-header-extra`}>{extra}</div>) : null}
        </div>
      )
  });


CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;
export default CardHeader;