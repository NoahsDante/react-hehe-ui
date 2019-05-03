import classnames from 'classnames';
import React from 'react';
import List from '../list';
import Radio from './index';
import PropsTypes from 'prop-types';


const ListItem = List.Item;

function noop() {
}

const propTypes = {
    prefixCls: PropsTypes.string,
    listPrefixCls: PropsTypes.string,
    className: PropsTypes.string,
};

const defaultProps = {
    prefixCls: 'hehe-radio',
    listPrefixCls: 'hehe-list',
    radioProps: {},
};

const RadioItem = React.forwardRef(({...props}, ref) => {
    const {
        listPrefixCls,
        onChange,
        disabled,
        radioProps,
        onClick,
        ...otherProps
    } = props;
    const {prefixCls, className, children} = otherProps;
    const wrapCls = classnames(`${prefixCls}-item`, className, {
        [`${prefixCls}-item-disabled`]: disabled === true,
    });

    if (!disabled) {
        otherProps.onClick = onClick || noop;
    }

    const extraProps = {};
    ['name', 'defaultChecked', 'checked', 'onChange', 'disabled'].forEach(i => {
        if (i in props) {
            extraProps[i] = props[i];
        }
    });

    return (
      <ListItem
        {...otherProps}
        prefixCls={listPrefixCls}
        className={wrapCls}
        extra={<Radio {...radioProps} {...extraProps} />}
        ref={ref}
      >
          {children}
      </ListItem>
    );
});

RadioItem.defaultProps = defaultProps;
RadioItem.propTypes = propTypes;

export default RadioItem;



