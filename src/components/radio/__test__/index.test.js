import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import Radio from '../index';

describe('Radio', () => {
    const prefixCls = '.hehe-radio';
    it('Should out a Radio', () => {
        const wrapper = render(<Radio/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(`${prefixCls}-wrapper`)).toBe(true);
    });
    it('Should set props defaultChecked', () => {
        const wrapper = render(<Radio defaultChecked/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(`${prefixCls}-checked`)).toHaveLength(1);
    });
    it('Should set props disabled', () => {
        const wrapper = render(<Radio disabled/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(`${prefixCls}-disabled`)).toHaveLength(1);
    });
    it('Should call change callback', () => {
        const changeHandle = jest.fn();
        const wrapper = mount(<Radio onChange={changeHandle}/>);
        wrapper.find('input').simulate('change');
        expect(changeHandle).toBeCalled();
    });
});