import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import SafeAnchor from '../other/SafeAnchor'

import '../style/buttons.less'

const propTypes = {
    /**
     * 自定义classname
     * */
    className: PropTypes.string,
    /**
     * @default button
     * */
    bsPrefix: PropTypes.string,
    /**
     *  button-light | button-dark | button-success | button-danger | button-warning
     * */
    variant: PropTypes.string,
    /**
     *  bg
     * */
    size: PropTypes.string,
    /**
     *  父级的宽度 设置成块级元素 button-block
     * */
    block: PropTypes.bool,
    /**
     *  填充颜色 button-fill
     * */
    fill: PropTypes.bool,
    /**
     *  圆角  button-round
     * */
    round: PropTypes.bool,
    /**
     *  选中状态 \ active
     * */
    active: PropTypes.bool,
    /**
     *  禁止状态 禁用按钮, 防止鼠标事件
     * */
    disabled: PropTypes.bool,
    /**
     *  提供 "href" 将呈现 "<a>" 元素, as 作为button
     * */
    href: PropTypes.string,
    /**
     *  定义 HTML 按钮类型属性
     * */
    type: PropTypes.oneOf(['button', 'submit', null]),
    as: PropTypes.elementType
};
const defaultProps = {
    bsPrefix: 'button',
    variant: 'dark',
    type: 'button',
    fill: true,
    round: false,
    disabled: false,
    active: false
};
const Button = React.forwardRef(
    ({className, bsPrefix, variant, size, block, active, type, as, fill, round, ...props}, ref) => {
        const classes = classNames(
            bsPrefix,
            round && 'button-round',
            fill && 'button-fill',
            `button-${variant}`,
            size && `button-${size}`,
            block && 'button-block',
            active && 'active',
            className
        );
        if (props.href) {
            return (
                <SafeAnchor
                    {...props}
                    as={as}
                    innerRef={ref}
                    className={classNames(classes, props.disabled && 'disabled')}
                />
            );
        }
        const Component = as || 'button';
        return (
            <Component {...props} type={type} className={classNames(classes, props.disabled && 'disabled')} ref={ref}/>)
    });


Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;