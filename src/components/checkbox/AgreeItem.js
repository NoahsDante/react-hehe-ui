import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';


const propTypes = {
    prefixCls: PropTypes.string,
};
const defaultProps = {
    prefixCls: 'hehe-checkbox',

};
const ArgreeItem = React.forwardRef(
  ({
       prefixCls,
       className,
       style,
       ...props
   }, ref) => {
      const wrapCls = classnames(`${prefixCls}-agree`, className);
      return (
        <div className={wrapCls} style={style} ref={ref}>
            <Checkbox {...props} className={`${prefixCls}-agree-label`}/>
        </div>
      )
  });


ArgreeItem.propTypes = propTypes;

ArgreeItem.defaultProps = defaultProps;
export default ArgreeItem;