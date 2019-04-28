import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Modal from './modal';

let Prompt = null;
const focusFn = (input = null) => {
    setTimeout(() => {
        if (input) {
            input.focus();
        }
    }, 500);
};

function onChange(e, data) {
    const target = e.target;
    const inputType = target.getAttribute('type');
    if (inputType !== null) {
        data[inputType] = target.value;
    }
};

function onClick(e) {
    const target = e.currentTarget || e.target;
    if (target) {
        target.focus();
    }
};

function onWrapTouchStart(e) {
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
        return;
    }
};

function inputHtml({type, prefixCls, placeholders}, data) {
    let inputDom;
    switch (type) {
        case 'login-password':
            inputDom = (
              <div className={`${prefixCls}-input-container`}>
                  <div className={`${prefixCls}-input`}>
                      <label>
                          <input
                            type="text"
                            defaultValue={data.text}
                            ref={input => focusFn(input)}
                            onClick={onClick}
                            onChange={(event) => onChange(event, data)}
                            placeholder={placeholders[0]}
                          />
                      </label>
                  </div>
                  <div className={`${prefixCls}-input`}>
                      <label>
                          <input
                            type="password"
                            defaultValue={data.password}
                            onClick={onClick}
                            onChange={(event) => onChange(event, data)}
                            placeholder={placeholders[1]}
                          />
                      </label>
                  </div>
              </div>
            );
            break;
        case 'secure-text':
            inputDom = (
              <div className={`${prefixCls}-input-container`}>
                  <div className={`${prefixCls}-input`}>
                      <label>
                          <input
                            type="password"
                            defaultValue={data.password}
                            ref={input => focusFn(input)}
                            onClick={onClick}
                            onChange={(event) => onChange(event, data)}
                            placeholder={placeholders[0]}
                          />
                      </label>
                  </div>
              </div>
            );
            break;
        case 'default':
        default:
            inputDom = (
              <div className={`${prefixCls}-input-container`}>
                  <div className={`${prefixCls}-input`}>
                      <label>
                          <input
                            type="text"
                            defaultValue={data.text}
                            ref={input => focusFn(input)}
                            onClick={onClick}
                            onChange={(event) => onChange(event, data)}
                            placeholder={placeholders[0]}
                          />
                      </label>
                  </div>
              </div>
            );
    }
    return inputDom;

}

function actionsButton({callbackOrActions, type}, data) {
    function handleConfirm(callback) {
        if (typeof callback !== 'function') {
            return;
        }
        const {text = '', password = ''} = data;
        const callbackArgs =
          type === 'login-password'
            ? [text, password]
            : type === 'secure-text' ? [password] : [text];

        return callback(...callbackArgs);
    }

    let actions;
    if (typeof callbackOrActions === 'function') {
        actions = [
            {
                text: '取消',
                onPress: () => {
                },
            },
            {
                text: '确定',
                onPress: () => {
                    handleConfirm(callbackOrActions);
                },
            },
        ];
    } else {
        actions = callbackOrActions.map(item => {
            return {
                text: item.text,
                onPress: () => {
                    return handleConfirm(item.onPress);
                },
            };
        });
    }

    return actions;
}

const propTypes = {
    prefixCls: PropTypes.string,
    actions: PropTypes.array,
    platform: PropTypes.string
};
const defaultProps = {
    prefixCls: 'hehe-modal',
    actions: [{text: '确定'}],
    platform: 'ios',
    type: 'default',
    defaultValue: '',
    placeholders: ['', '']
};
const PromptElement = React.forwardRef(
  ({
       ...props
   }, ref) => {
      let {
          prefixCls,
          title,
          message,
          platform,
          onClose,
          defaultValue
      } = props;
      defaultValue =
        typeof defaultValue === 'string'
          ? defaultValue
          : typeof defaultValue === 'number' ? `${defaultValue}` : '';

      const data = {
          text: defaultValue,
      };
      const content = (
        <div>
            {message}
            {inputHtml(props, data)}
        </div>
      );
      const actions = actionsButton(props, data);
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
      return (
        <Modal
          visible
          transparent
          prefixCls={prefixCls}
          title={title}
          closable={false}
          maskClosable={false}
          transitionName="hehe-zoom"
          footer={footer}
          maskTransitionName="hehe-fade"
          platform={platform}
          wrapProps={{onTouchStart: onWrapTouchStart}}
        >
            <div className={`${prefixCls}-propmt-content`}>{content}</div>
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
    if (!props.callbackOrActions) {
        return {
            close: () => {
            },
        };
    }
    ReactDOM.render(<PromptElement onClose={close} {...props}/>, wrapDiv)
    return {
        close
    };
};


export default Prompt;