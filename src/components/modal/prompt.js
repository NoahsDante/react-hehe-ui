import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Modal from './modal';

let Prompt = null;
const propTypes = {
    prefixCls: PropTypes.string,
    actions: PropTypes.array,
    platform: PropTypes.string
};
const defaultProps = {
    prefixCls: 'hehe-modal',
    actions: [{text: '确定'}],
    platform: 'ios',
    type:'default',
    defaultValue:'',
    placeholders:['','']
};
const PromptElement = React.forwardRef(
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
          operation
          transparent
          transitionName="hehe-zoom"
          closable={false}
          maskClosable
          footer={footer}
          onClose={onClose}
          maskTransitionName="hehe-fade"
          className={`${prefixCls}-operation`}
          platform={platform}
          wrapProps={{onTouchStart: onWrapTouchStart}}
          {...props}
          ref={ref}
        >
        </Modal>
      );
  });
PromptElement.propTypes = propTypes;
PromptElement.defaultProps = defaultProps;

Prompt = ({...props}) => {
    const wrapDiv = document.createElement('div');
    document.body.append(wrapDiv);
    const close = () => {
        ReactDOM.unmountComponentAtNode(wrapDiv);
        if (wrapDiv && wrapDiv.parentNode) {
            wrapDiv.parentNode.removeChild(wrapDiv);
        }
    };
    ReactDOM.render(<PromptElement onClose={close} {...props}/>, wrapDiv)
    return {
        close
    };
};


export default Prompt;