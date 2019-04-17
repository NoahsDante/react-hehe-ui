import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import List from '../list';

const propTypes = {
    prefixCls: PropTypes.string,
    listPrefixCls: PropTypes.string,
    checkboxProps: PropTypes.object
};
const defaultProps = {
    prefixCls: 'hehe-checkbox',
    listPrefixCls:'hehe-list',
    checkboxProps:{}

};
const CheckboxItem = React.forwardRef(
  ({
       prefixCls,
       ...props
   }, ref) => {
      const wrapCls = classnames(`${prefixCls}-body`);

      return (<div className={wrapCls} ref={ref} {...props} />)
  });


CheckboxItem.propTypes = propTypes;
CheckboxItem.defaultProps = defaultProps;
export default CheckboxItem;