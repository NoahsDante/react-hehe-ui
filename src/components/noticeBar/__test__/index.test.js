import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import NoticeBar from '../index';

describe('NoticeBar', () => {
    const prefixCls = '.hehe-notice-bar';
    it('Should out a NoticeBar', () => {
        const wrapper = render(<NoticeBar/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
    });
    it('Should set props action',() => {
        const wrapper = render(<NoticeBar  mode="link" action={<span>去看看</span>}/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('span').text()).toBe('去看看');

    });
    it('Should call click callback',() => {
        const clickHandle = jest.fn();
        const wrapper = shallow(<NoticeBar  mode="link" onClick={clickHandle}/>);
        wrapper.find(prefixCls).simulate('click');
        expect(clickHandle).toBeCalled();

    });
});