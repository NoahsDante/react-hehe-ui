import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Modal from './modal';

let Operation = null;
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
const OperationElement = React.forwardRef(
  ({
       prefixCls,
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
          operation
          transparent
          prefixCls={prefixCls}
          transitionName="hehe-zoom"
          closable={false}
          maskClosable
          onClose={onClose}
          footer={footer}
          maskTransitionName="hehe-fade"
          className="hehe-modal-operation"
          platform={platform}
          wrapProps={{ onTouchStart: onWrapTouchStart }}
          {...props}
          ref={ref}
        >
        </Modal>
      );
  });
OperationElement.propTypes = propTypes;
OperationElement.defaultProps = defaultProps;

Operation = ({...props}) => {
    const wrapDiv = document.createElement('div');
    document.body.append(wrapDiv);
    const close = () => {
        ReactDOM.unmountComponentAtNode(wrapDiv);
        if (wrapDiv && wrapDiv.parentNode) {
            wrapDiv.parentNode.removeChild(wrapDiv);
        }
    };
    ReactDOM.render(<OperationElement onClose={close} {...props}/>, wrapDiv)
    return {
        close
    };
};


export default Operation;