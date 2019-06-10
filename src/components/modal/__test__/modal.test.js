import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'rmc-dialog';
import {render, mount, shallow} from 'enzyme';
import {mountToJson, renderToJson} from 'enzyme-to-json';
import Modal from '../modal';
import App from "../../../App";

describe('Modal', () => {
    const prefixCls = '.hehe-modal';
    let focusableContainer;

    beforeEach(() => {
        focusableContainer = document.createElement('div');
        document.body.appendChild(focusableContainer);
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(focusableContainer);
        document.body.removeChild(focusableContainer);
    });
    it('Should out a Modal', () => {
        const wrapper = mount(<Modal visible={true}/>);
        expect(mountToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(`${prefixCls}-content`)).toHaveLength(1);
    });
    it('Should set props', () => {
        const afterCloseClickHandle = jest.fn();
        const closeClickHandle = jest.fn(() => {
            afterCloseClickHandle()
        });
        const footerClickHandle = jest.fn(() => {
            closeClickHandle()
        });
        const wrapper = mount(<Modal
          visible={true}
          onClose={closeClickHandle}
          title="Title"
          footer={[{
              text: 'Ok', onPress: footerClickHandle
          }]}
          afterClose={afterCloseClickHandle}
        />);
        expect(mountToJson(wrapper)).toMatchSnapshot();
        wrapper.find(`${prefixCls}-button`).simulate('click');
        expect(footerClickHandle).toBeCalled();
        expect(wrapper.find(`${prefixCls}-title`)).toHaveLength(1);
        expect(wrapper.find(`${prefixCls}-button`)).toHaveLength(1);
        expect(closeClickHandle).toBeCalled();
        expect(afterCloseClickHandle).toBeCalled();
    });
});