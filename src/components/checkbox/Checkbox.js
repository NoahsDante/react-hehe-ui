import classnames from 'classnames';
import RcCheckbox from 'rc-checkbox';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    prefixCls: PropTypes.string,
    wrapLabel: PropTypes.bool,
};
const defaultProps = {
    prefixCls: 'hehe-checkbox',
    wrapLabel: true

};
const Checkbox = React.forwardRef(
  ({
       ...props
   }, ref) => {
      const {className, style, ...restProps} = props;
      const {children, prefixCls} = restProps;
      const wrapCls = classnames(`${prefixCls}-wrapper`, className);

      if (props.wrapLabel) {
          return (
            <label className={wrapCls} style={style}>
                <RcCheckbox {...restProps} ref={ref}/>
                {children}
            </label>
          );
      }

      return (
        <RcCheckbox {...props}/>
      )
  });

Checkbox.Item = null;
Checkbox.AgreeItem = null;

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
export default Checkbox;