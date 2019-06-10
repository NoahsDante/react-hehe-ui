import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson,mountToJson} from 'enzyme-to-json';
import Button from '../index';

describe('Button', () => {
    const prefixCls = '.hehe-button';
    it('Should output a button', () => {
        const wrapper = render(<Button><span>default</span></Button>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
    });
    it('Should have variant props primary class', () => {
        const wrapper = render(<Button variant='primary'></Button>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(`${prefixCls}-primary`)).toBe(true)
    });
    it('Should have size props small class', () => {
        const wrapper = render(<Button size='small'></Button>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(`${prefixCls}-small`)).toBe(true);
    });
    it('Should be disabled', () => {
        const clickHandle = jest.fn();
        const wrapper = mount(<Button disabled onClick={clickHandle}></Button>);
        const disabledElement = wrapper.find(`${prefixCls}-disabled`);
        expect(mountToJson(wrapper)).toMatchSnapshot();
        disabledElement.simulate('click');
        expect(disabledElement).toHaveLength(1);
        expect(clickHandle).not.toHaveBeenCalled();
    });
    it('Should call onClick callback', () => {
        const clickHandle = jest.fn();
        const wrapper = mount(<Button onClick={clickHandle}></Button>);
        expect(mountToJson(wrapper)).toMatchSnapshot();
        wrapper.find(prefixCls).simulate('click');
        expect(clickHandle).toHaveBeenCalled();
    });
    it('Should output a href', () => {
        const wrapper = render(<Button href='/url'/>);
        expect(wrapper.prop('href')).toEqual('/url');
    });
    it('Should change elementTagName', () => {
        const wrapper = render(<Button as='div'/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is('div')).toBe(true);
    });
});