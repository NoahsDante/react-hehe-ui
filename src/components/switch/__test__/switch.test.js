import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson, mountToJson, shallowToJson} from 'enzyme-to-json';
import Switch from '../index';

describe('Switch', () => {
    const prefixCls = '.hehe-switch';
    it('Should out a Switch', () => {
        const wrapper = shallow(<Switch/>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(prefixCls)).toHaveLength(1);
    });
    it('Should set props checked', () => {
        const wrapper = shallow(<Switch checked/>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('input').prop('checked')).toBe(true);
    });
    it('Should set props disabled', () => {
        const wrapper = shallow(<Switch disabled/>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('input').prop('disabled')).toBe(true);
    });
    it('Should call onChange callback', () => {
        const changeHandle = jest.fn();
        const wrapper = shallow(<Switch onChange={changeHandle}/>);
        wrapper.find('input').simulate('change', {target: wrapper});
        expect(changeHandle).toBeCalled();
    });
    it('Should call onClick callback', () => {
        const clickHandle = jest.fn();
        const wrapper = shallow(<Switch onClick={clickHandle}/>);
        wrapper.find('input').simulate('click', {target: wrapper});
        expect(clickHandle).toBeCalled();
    });
});