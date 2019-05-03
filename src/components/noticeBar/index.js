import classnames from 'classnames';
import React from 'react';
import Marquee, {MarqueeProps} from './marquee';
import PropTypes from 'prop-types';


import './style/noticeBar.less'

const propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    MarqueeProps: PropTypes.oneOf(MarqueeProps),
    style: PropTypes.object
};
const defaultProps = {
    prefixCls: 'hehe-notice-bar',
    mode: '',
    icon: '',
    onClick() {
    },
};

class NoticeBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        }

    }

    onClick = () => {
        const {mode, onClick} = this.props;
        if (onClick) {
            onClick();
        }
        if (mode === 'closable') {
            this.setState({
                show: false,
            });
        }
    }

    render() {
        const {
            mode,
            icon,
            onClick,
            children,
            className,
            prefixCls,
            action,
            marqueeProps,
            ...restProps
        } = this.props;


        const extraProps = {};
        let operationDom = null;
        if (mode === 'closable') {
            operationDom = (
              <div
                className={`${prefixCls}-operation`}
                onClick={this.onClick}
                role="button"
                aria-label="close"
              >
                  {action ? action : (<div>icon</div>)}
              </div>
            );
        } else {
            if (mode === 'link') {
                operationDom = (
                  <div
                    className={`${prefixCls}-operation`}
                    role="button"
                    aria-label="go to detail"
                  >
                      {action ? action : (<div>icon</div>)}
                  </div>
                );
            }
            extraProps.onClick = onClick;
        }


        const wrapCls = classnames(prefixCls, className);
        return this.state.show ? (
          <div className={wrapCls} {...restProps} {...extraProps} role="alert">
              {icon && (
                // tslint:disable-next-line:jsx-no-multiline-js
                <div className={`${prefixCls}-icon`} aria-hidden="true">
                    {icon}
                </div>
              )}
              <div className={`${prefixCls}-content`}>
                  <Marquee
                    prefixCls={prefixCls}
                    text={children}
                    {...marqueeProps}
                  />
              </div>
              {operationDom}
          </div>
        ) : null;
    }
}

NoticeBar.propTypes = propTypes;
NoticeBar.defaultProps = defaultProps;
export default NoticeBar;
