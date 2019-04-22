import classnames from 'classnames';
import React from 'react';
import Dialog from 'rmc-dialog';
import TouchFeedback from 'rmc-feedback';
import PropTypes from 'prop-types';

const propTypes = {
    prefixCls: PropTypes.string,
    transitionName: PropTypes.string,
    animationType: PropTypes.oneOf(['slide-down', 'up', 'fade', 'slide']),
    maskTransitionName: PropTypes.string,
    className: PropTypes.string,
    wrapClassName: PropTypes.string,
    wrapProps: PropTypes.object,
    platform: PropTypes.oneOf(['ios', 'android']),
    style: PropTypes.object,
    bodyStyle: PropTypes.object,
};
const defaultProps = {
    prefixCls: 'hehe-modal',
    transparent: false,
    popup: false,
    animationType: 'slide-down',
    animated: true,
    style: {},
    onShow() {
    },
    footer: [],
    closable: false,
    operation: false,
    platform: 'ios',
};
const Modal = React.forwardRef(
    ({
         prefixCls,
         className,
         wrapClassName,
         transitionName,
         maskTransitionName,
         style,
         platform,
         footer = [],
         operation,
         animated,
         transparent,
         popup,
         animationType,
         ...props
     }, ref) => {
        const renderFooterButton = (button, prefixCls, i) => {
            let buttonStyle = {};
            if (button.style) {
                buttonStyle = button.style;
                if (typeof buttonStyle === 'string') {
                    const styleMap = {
                        cancel: {},
                        default: {},
                        destructive: {color: 'red'},
                    };
                    buttonStyle = styleMap[buttonStyle] || {};
                }
            }

            const onClickFn = (e) => {
                e.preventDefault();
                if (button.onPress) {
                    button.onPress();
                }
            };

            return (
                <TouchFeedback activeClassName={`${prefixCls}-button-active`} key={i}>
                    <a
                        className={`${prefixCls}-button`}
                        role="button"
                        style={buttonStyle}
                        onClick={onClickFn}
                    >
                        {button.text || `Button`}
                    </a>
                </TouchFeedback>
            );
        };
        const btnGroupClass = classnames(
            `${prefixCls}-button-group-${
                footer.length === 2 && !operation ? 'h' : 'v'
                }`,
            `${prefixCls}-button-group-${operation ? 'operation' : 'normal'}`,
        );
        const footerDom = footer.length ? (
            <div className={btnGroupClass} role="group">
                {footer.map((button, i) =>
                    renderFooterButton(button, prefixCls, i),
                )}
            </div>
        ) : null;
        let transName;
        let maskTransName;
        if (animated) {
            if (transparent) {
                transName = maskTransName = 'am-fade';
            } else {
                transName = maskTransName = 'am-slide-up';
            }
            if (popup) {
                transName = animationType === 'slide-up' ? 'am-slide-up' : 'am-slide-down';
                maskTransName = 'am-fade';
            }
        }

        const wrapCls = classnames(wrapClassName, {
            [`${prefixCls}-wrap-popup`]: popup,
        });
        const cls = classnames(className, {
            [`${prefixCls}-transparent`]: transparent,
            [`${prefixCls}-popup`]: popup,
            [`${prefixCls}-popup-${animationType}`]: popup && animationType,
            [`${prefixCls}-android`]: platform === 'android',
        });
        return (
            <Dialog
                prefixCls={prefixCls}
                className={cls}
                wrapClassName={wrapCls}
                transitionName={transitionName || transName}
                maskTransitionName={maskTransitionName || maskTransName}
                style={style}
                footer={footerDom}
                {...props}
                ref={ref}
            />
        );
    });
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
export default Modal;