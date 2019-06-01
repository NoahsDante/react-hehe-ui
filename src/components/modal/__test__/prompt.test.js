import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {PromptElement} from '../prompt';

describe('PromptElement', () => {
    const prefixCls = '.hehe-modal';
    const clickHandle = jest.fn((value) => {
        return value;
    });
    const props = {
        onClose: () => {
        },
        title: 'defaultValue',
        message: 'defaultValue for prompt',
        type: 'default',
        defaultValue: '100',
        callbackOrActions: [
            {text: 'Cancel'},
            {text: 'Submit', onPress: clickHandle},
        ]
    }
    it('Should out a PromptElement', () => {
        const wrapper = mount(<PromptElement {...props}/>);
        expect(wrapper.find(`${prefixCls}-input-container`)).toHaveLength(1);
    });
    it('Should call click callback', () => {
        const wrapper = mount(<PromptElement {...props}/>);
        wrapper.find(`${prefixCls}-button`).at(1).simulate('click');
        expect(clickHandle).toBeCalled();
        expect(clickHandle).toHaveReturnedWith('100');
    });
});