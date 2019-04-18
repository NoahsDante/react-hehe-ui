import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

import List from '../list';

function noop() {
}
const propTypes = {
    prefixCls: PropTypes.string,
    listPrefixCls: PropTypes.string,
    checkboxProps: PropTypes.object
};
const defaultProps = {
    prefixCls: 'hehe-checkbox',
    listPrefixCls: 'hehe-list',
    checkboxProps: {}

};
const CheckboxItem = React.forwardRef(
  ({
       ...props
   }, ref) => {
      const {listPrefixCls, checkboxProps, disabled, onClick, prefixCls, ...restProps} = props;
      const {className, children} = restProps;
      const wrapCls = classnames(`${prefixCls}-item`, className, {
          [`${prefixCls}-item-disabled`]: disabled === true
      });
      if (!disabled) {
          restProps.onClick = onClick || noop;
      }
      const extraProps = {};
      ['name', 'defaultChecked', 'checked', 'onChange', 'disabled'].forEach(i => {
          if (i in props) {
              extraProps[i] = props[i];
          }
      });
      return (
        <List.Item
          prefixCls={listPrefixCls}
          className={wrapCls}
          ref={ref}
          thumb={<Checkbox {...checkboxProps} {...extraProps}/>}
          {...restProps}
        >
            {children}
        </List.Item>
      )
  });


CheckboxItem.propTypes = propTypes;

CheckboxItem.defaultProps = defaultProps;
export default CheckboxItem;