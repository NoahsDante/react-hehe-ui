import React from 'react';
import {Button, List, Modal, WhiteSpace} from 'hehe-mobile';


const Alert = Modal.Alert;
const Operation = Modal.Operation;

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

const showAlert = () => {
    const wrapAlert = Alert({
        title: 'Delete',
        message: 'Are you sure???',
        actions: [
            {text: 'Cancel', onPress: () => console.log('cancel')},
            {text: 'Ok', onPress: () => console.log('ok')},
        ],
    });
    setTimeout(() => {
        console.log('auto close');
        wrapAlert.close();
    }, 2000);
};

class ModalView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
        };
    }

    showModal = key => (e) => {
        e.preventDefault();
        this.setState({
            [key]: true,
        });
    };
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    };

    onWrapTouchStart = (e) => {
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    };

    render() {
        return (
          <>
              <WhiteSpace/>
              <div>基本</div>
              <WhiteSpace/>
              <Button onClick={this.showModal('modal1')}>basic</Button>
              <WhiteSpace/>
              <Modal
                visible={this.state.modal1}
                transparent
                maskClosable={false}
                onClose={this.onClose('modal1')}
                title="Title"
                footer={[{
                    text: 'Ok', onPress: () => {
                        console.log('ok');
                        this.onClose('modal1')();
                    }
                }]}
                wrapProps={{onTouchStart: this.onWrapTouchStart}}
                afterClose={() => {
                    alert('完全关闭后的回调');
                }}
              >
                  <div style={{height: 100, overflow: 'scroll'}}>
                      scoll content...<br/>
                      scoll content...<br/>
                      scoll content...<br/>
                      scoll content...<br/>
                      scoll content...<br/>
                      scoll content...<br/>
                  </div>
              </Modal>

              <Button onClick={this.showModal('modal2')}>popup</Button>
              <WhiteSpace/>
              <Modal
                popup
                visible={this.state.modal2}
                onClose={this.onClose('modal2')}
                animationType="slide-up"
                afterClose={() => {
                    alert('完全关闭后的回调');
                }}
              >
                  <List renderHeader={() => <div>委托买入</div>} className="popup-list">
                      {['股票名称', '股票代码', '买入价格'].map((i, index) => (
                        <List.Item key={index}>{i}</List.Item>
                      ))}
                      <List.Item>
                          <Button type="primary" onClick={this.onClose('modal2')}>买入</Button>
                      </List.Item>
                  </List>
              </Modal>
              <WhiteSpace/>
              <div>警告弹窗</div>
              <WhiteSpace/>
              <Button onClick={showAlert}>customized buttons</Button>

              <WhiteSpace size="lg"/>
              <Button
                onClick={() => {
                    Alert({
                          title: 'Delete',
                          message: 'Are you sure???',
                          actions: [
                              {text: 'Cancel', onPress: () => console.log('cancel')},
                              {text: 'Ok', onPress: () => console.log('ok')},
                          ],
                      }
                    )
                }
                }
              >
                  confirm
              </Button>

              <WhiteSpace size="lg"/>
              <Button
                onClick={() =>
                  Alert({
                        title: 'Much Buttons',
                        message: <div>More than two buttons</div>,
                        actions: [
                            {text: 'Button1', onPress: () => console.log('第0个按钮被点击了')},
                            {text: 'Button2', onPress: () => console.log('第1个按钮被点击了')},
                            {text: 'Button3', onPress: () => console.log('第2个按钮被点击了')},
                        ],
                    }
                  )
                }
              >
                  more than two buttons
              </Button>

              <WhiteSpace size="lg"/>

              <Button
                onClick={() =>
                  Alert({
                        title: 'Delete',
                        message: 'Are you sure???',
                        actions: [
                            {text: 'Cancel', onPress: () => console.log('cancel')},
                            {
                                text: 'Ok',
                                onPress: () =>
                                  new Promise((resolve) => {
                                      setTimeout(resolve, 1000);
                                  }),
                            },],
                    }
                  )
                }
              >
                  promise
              </Button>
              <WhiteSpace size="lg"/>
              <div>操作目录</div>
              <WhiteSpace size="lg"/>
              <Button onClick={() =>
                Operation(
                  {
                      actions: [
                          {text: '标为未读', onPress: () => console.log('标为未读被点击了')},
                          {text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了')},
                      ]
                  }
                )
              }
              >operation</Button>
              <WhiteSpace size="lg"/>
          </>
        );
    }
}

export default ModalView;