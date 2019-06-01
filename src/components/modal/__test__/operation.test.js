import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {OperationElement} from '../operation';

describe('OperationElement', () => {
    const prefixCls = '.hehe-modal';
    const clickHandle = jest.fn();
    const props = {
        onClose: () => {
        },
        actions: [
            {text: '标为未读', onPress: clickHandle},
            {text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了')},
        ]
    };
    it('Should out a OperationElement', () => {
        const wrapper = mount(<OperationElement {...props}/>);
        expect(wrapper.find(`${prefixCls}-content`)).toHaveLength(1);
    });
    it('Should call click callback', () => {
        const wrapper = mount(<OperationElement {...props}/>);
        wrapper.find(`${prefixCls}-button`).at(0).simulate('click');
        expect(clickHandle).toBeCalled();
    });
});