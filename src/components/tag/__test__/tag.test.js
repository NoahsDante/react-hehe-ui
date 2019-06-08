import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson,mountToJson,shallowToJson} from 'enzyme-to-json';
import Tag from '../index';

describe('Tag', () => {
    const prefixCls = '.hehe-tag';

    it('Should out a Tag', () => {
        const  wrapper = shallow( <Tag data-seed="logId">Basic</Tag>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
    });
    it('Should set props small',() => {
        const  wrapper = shallow( <Tag small>small</Tag>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(`${prefixCls}-small`)).toBe(true)
    });
    it('Should set props disabled',() => {
        const  wrapper = shallow( <Tag disabled>disabled</Tag>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(`${prefixCls}-disabled`)).toBe(true)
    });
    it('Should set props selected',() => {
        const  wrapper = shallow( <Tag selected>selected</Tag>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(`${prefixCls}-active`)).toBe(true)
    });
    it('Should call onChange',() => {
        const changeHandle = jest.fn();
        const  wrapper = mount( <Tag onChange={changeHandle}>onChange</Tag>);
        expect(mountToJson(wrapper)).toMatchSnapshot();
        wrapper.find(prefixCls).simulate('click');
        wrapper.find(prefixCls).simulate('click');
        expect(changeHandle).toHaveBeenCalledTimes(2);
    });
    it('Should call onClose',() => {
        const closeHandle = jest.fn();
        const afterCloseHandle = jest.fn();
        const  wrapper = mount( <Tag closable onClose={closeHandle} afterClose={afterCloseHandle}>closable</Tag>);
        expect(mountToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(`${prefixCls}-close`)).toHaveLength(1);
        wrapper.find(`${prefixCls}-close`).simulate('click');
        expect(closeHandle).toBeCalled();
        expect(afterCloseHandle).toBeCalled();
    });
});