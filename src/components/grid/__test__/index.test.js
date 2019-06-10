import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {shallowToJson, renderToJson} from 'enzyme-to-json';
import Grid from '../index';

describe('Grid', () => {
    const prefixCls = '.hehe-grid';
    const data = Array.from(new Array(9)).map((_val, i) => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `name${i}`,
    }));
    it('Should output a Grid', () => {
        const wrapper = render(<Grid data={data}/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
    });
    it('Should set prop columnNum', () => {
        const wrapper = render(<Grid data={data} columnNum={3}/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('.hehe-flexbox').first().find(`${prefixCls}-item`)).toHaveLength(3);
    });
    it('Should set prop square', () => {
        const wrapper = render(<Grid data={data} square={false}/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(`${prefixCls}-not-square`)).toBe(true);
    });
    it('Should call click callback', () => {
        const clickHandle = jest.fn();
        const wrapper = shallow(<Grid data={data} onClick={clickHandle}/>);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        wrapper.find(`${prefixCls}-item`).first().simulate('click');
        expect(clickHandle).toBeCalled();
    });

});
