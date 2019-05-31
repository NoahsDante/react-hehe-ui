import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Modal from './modal';

let Alert = null;
const propTypes = {
    prefixCls: PropTypes.string,
    actions: PropTypes.array,
    platform: PropTypes.string
};
const defaultProps = {
    prefixCls: 'hehe-modal',
    actions: [{text: '确定'}],
    platform: 'ios'
};
const AlertElement = React.forwardRef(
  ({
       prefixCls,
       title,
       message,
       actions,
       platform,
       onClose,
       ...props
   }, ref) => {

      const footer = actions.map((button) => {
          const orginPress = button.onPress || function () {
          };
          button.onPress = () => {
              const res = orginPress();
              if (res && res.then) {
                  res
                    .then(() => {
                        onClose();
                    })
                    .catch(() => {
                    });
              } else {
                  onClose();
              }
          };
          return button;
      });

      function onWrapTouchStart(e) {
          if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
              return;
          }
      }

      return (
        <Modal
          visible
          transparent
          title={title}
          transitionName="hehe-zoom"
          closable={false}
          maskClosable={false}
          footer={footer}
          maskTransitionName="hehe-fade"
          platform={platform}
          wrapProps={{onTouchStart: onWrapTouchStart}}
          {...props}
          ref={ref}
        >
            <div className={`${prefixCls}-alert-content`}>{message}</div>
        </Modal>
      );
  });
AlertElement.propTypes = propTypes;
AlertElement.defaultProps = defaultProps;

Alert = ({...props}) => {
    const wrapDiv = document.createElement('div');
    document.body.append(wrapDiv);
    const close = () => {
        ReactDOM.unmountComponentAtNode(wrapDiv);
        if (wrapDiv && wrapDiv.parentNode) {
            wrapDiv.parentNode.removeChild(wrapDiv);
        }
    };
    ReactDOM.render(<AlertElement onClose={close} {...props}/>, wrapDiv);
    return {
        close
    };
};
// 进行单元测试
export {
    AlertElement
};

export default Alert;