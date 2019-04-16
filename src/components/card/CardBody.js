import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    prefixCls: PropTypes.string
};
const defaultProps = {
    prefixCls: 'hehe-card',

};
const CardBody = React.forwardRef(
  ({
       prefixCls,
       ...props
   }, ref) => {
      const wrapCls = classnames(`${prefixCls}-body`);

      return (<div className={wrapCls} ref={ref} {...props} />)
  });


CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;
export default CardBody;