import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import SafeAnchor from '../other/SafeAnchor'

import '../style/buttons.less'

const Button = React.forwardRef(
    ({className, bsPrefix, variant, size, block, active, type, as, fill, ...props}, ref) => {
        const classes = classNames(
            className,
            bsPrefix,
            `button-${variant}`,
            `button-${size}`,
            fill && 'button-fill',
            block && 'button-block',
            active && 'active',
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


Button.propTypes = {
    /**
     * 自定义classname
     * */
    className: PropTypes.string,
    /**
     * @default button
     * */
    bsPrefix: PropTypes.string,
    /**
     *  button-light | button-dark | button-success | button-danger | button-warning | button-round
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
     *  填充颜色
     * */
    fill: PropTypes.bool,
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
Button.defaultProps = {
    bsPrefix: 'button',
    type: 'button',
    fill: true,
    disabled: false,
    active: false
};
export default Button;