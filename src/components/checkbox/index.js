import classNames from 'classnames';

import React from 'react';
import PropTypes from 'prop-types';

import '../style/checkbox.less'

const propTypes = {
    /**
     *
     * 前缀
     * @default hehe-checkbox
     *
     * */
    prefixCls: PropTypes.string,
    /**
     *
     * 样式类明name
     * @default ''
     *
     * */
    className: PropTypes.string,
    /**
     *
     *  input  类型
     *  @default checkbox
     *
     * */
    type: PropTypes.string,
    /**
     *
     *  默认Checked
     *  @default false
     *
     * */
    defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    /**
     *
     * 默认Checked
     * @default false
     *
     * */
    checked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    /**
     *
     * 禁止状态
     * @default false
     *
     * */
    disabled: PropTypes.bool,
    /**
     *
     * 焦点函数
     *
     * */
    onFocus: PropTypes.func,
    /**
     *
     * 失去焦点函数
     *
     * */
    onBlur: PropTypes.func,
    /**
     *
     * 发生改变
     *
     * */
    onChange: PropTypes.func,
    /**
     *
     * 点击事件函数
     *
     * */
    onClick: PropTypes.func,
    /**
     *
     *
     * */
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     *
     * 是否只读
     *
     * */
    readOnly: PropTypes.bool,
    /**
     *
     * 自动焦点
     *
     * */
    autoFocus: PropTypes.bool,
    /**
     * value 值
     *
     * */
    value: PropTypes.any,

};

const defaultProps = {
    prefixCls: 'hehe-checkbox',
    className: '',
    type: 'checkbox',
    defaultChecked: false,
    onFocus() {
    },
    onBlur() {
    },
    onChange() {
    },
};


class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        const checked = 'checked' in props ? props.checked : props.defaultChecked;

        this.state = {
            checked,
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked,
            });
        }
    }

    shouldComponentUpdate(...args) {
        return PureRenderMixin.shouldComponentUpdate.apply(this, args);
    }

    focus() {
        this.input.focus();
    }

    blur() {
        this.input.blur();
    }

    handleChange = (e) => {
        const {props} = this;
        if (props.disabled) {
            return;
        }
        if (!('checked' in props)) {
            this.setState({
                checked: e.target.checked,
            });
        }
        props.onChange({
            target: {
                ...props,
                checked: e.target.checked,
            },
            stopPropagation() {
                e.stopPropagation();
            },
            preventDefault() {
                e.preventDefault();
            },
            nativeEvent: e.nativeEvent,
        });
    };

    saveInput = (node) => {
        this.input = node;
    }

    render() {
        const {
            prefixCls,
            className,
            type,
            disabled,
            readOnly,
            tabIndex,
            onClick,
            onFocus,
            onBlur,
            autoFocus,
            value,
            ...others,
        } = this.props;

        const globalProps = Object.keys(others).reduce((prev, key) => {
            if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
                prev[key] = others[key];
            }
            return prev;
        }, {});

        const {checked} = this.state;
        const classString = classNames(prefixCls, className, {
            [`${prefixCls}-checked`]: checked,
            [`${prefixCls}-disabled`]: disabled,
        });

        return (
          <span className={classString}>
        <input
          type={type}
          readOnly={readOnly}
          disabled={disabled}
          tabIndex={tabIndex}
          className={`${prefixCls}-input`}
          checked={!!checked}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={this.handleChange}
          autoFocus={autoFocus}
          ref={this.saveInput}
          value={value}
          {...globalProps}
        />
        <span className={`${prefixCls}-inner`}/>
      </span>
        );
    }
}


Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;