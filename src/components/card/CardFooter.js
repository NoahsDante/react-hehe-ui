import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    prefixCls: PropTypes.string
};
const defaultProps = {
    prefixCls: 'hehe-card',

};
const CardFooter = React.forwardRef(
  ({
       prefixCls,
       className,
       extra,
       content,
       ...props
   }, ref) => {
      const wrapCls = classnames(`${prefixCls}-footer`, className);

      return (
        <div className={wrapCls} ref={ref} {...props}>
            <div className={`${prefixCls}-footer-content`}>
                {content}
            </div>
            {extra && <div className={`${prefixCls}-footer-extra`}>{extra}</div>}
        </div>
      )
  });


CardFooter.propTypes = propTypes;
CardFooter.defaultProps = defaultProps;
export default CardFooter;