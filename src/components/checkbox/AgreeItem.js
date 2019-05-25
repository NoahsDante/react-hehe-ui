import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';


const propTypes = {
    prefixCls: PropTypes.string,
    change: PropTypes.func
};
const defaultProps = {
    prefixCls: 'hehe-checkbox',
    change: () => {
    }

};
const AgreeItem = React.forwardRef(
  ({
       prefixCls,
       className,
       style,
       change,
       ...props
   }, ref) => {
      const wrapCls = classnames(`${prefixCls}-agree`, className);
      return (
        <div className={wrapCls} style={style} ref={ref}>
            <Checkbox {...props} onChange={change} className={`${prefixCls}-agree-label`}/>
        </div>
      )
  });


AgreeItem.propTypes = propTypes;

AgreeItem.defaultProps = defaultProps;
export default AgreeItem;