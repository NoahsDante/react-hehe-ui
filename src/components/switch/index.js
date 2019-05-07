import classnames from 'classnames';
import React from 'react';
import PropsTypes from 'prop-types';


import './style/switch.less';

const propTypes = {
    prefixCls: PropsTypes.string,
    className: PropsTypes.string,
    platform: PropsTypes.string,
    style: PropsTypes.object,
    checked: PropsTypes.bool,
    disabled: PropsTypes.bool,
    onChange: PropsTypes.func,
    color: PropsTypes.string,
    name: PropsTypes.string,
    onClick: PropsTypes.func,
};

const defaultProps = {
    prefixCls: 'am-switch',
    name: '',
    checked: false,
    disabled: false,
    onChange() {
    },
    platform: 'ios',
    onClick() {
    },
};

const Switch = React.forwardRef(({...props}, ref) => {


    const {
        prefixCls,
        name,
        checked,
        disabled,
        className,
        platform,
        color,
        ...restProps
    } = props;
    const wrapCls = classnames(prefixCls, className, {
        [`${prefixCls}-android`]: platform === 'android',
    });

    const fackInputCls = classnames('checkbox', {
        [`checkbox-disabled`]: disabled,
    });
    const globalProps = Object.keys(restProps).reduce((prev, key) => {
        if (
          key.substr(0, 5) === 'aria-' ||
          key.substr(0, 5) === 'data-' ||
          key === 'role'
        ) {
            prev[key] = restProps[key];
        }
        return prev;
    }, {});

    const style = props.style || {};
    if (color && checked) {
        style.backgroundColor = color;
    }
    const onChange = (e) => {
        const checked = e.target.checked;
        if (props.onChange) {
            props.onChange(checked);
        }
    }

    const onClick = (e) => {
        if (props.onClick) {
            let val;
            // tslint:disable-next-line:prefer-conditional-expression
            if (e && e.target && e.target.checked !== undefined) {
                val = e.target.checked;
            } else {
                val = props.checked;
            }
            props.onClick(val);
        }
    }
    return (
      <label className={wrapCls}>
          <input
            type="checkbox"
            name={name}
            className={`${prefixCls}-checkbox`}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
            value={checked ? 'on' : 'off'}
            {...(!disabled ? {onClick: onClick} : {})}
            {...globalProps}
          />
          <div
            className={fackInputCls}
            style={style}
            {...(disabled ? {onClick: onClick} : {})}
          />
      </label>
    );
});

Switch.defaultProps = defaultProps;
Switch.propTypes = propTypes;

export default Switch;

