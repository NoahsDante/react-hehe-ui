import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import CardFooter from '../CardFooter';

describe('CardFooter', () => {
    const prefixCls = '.hehe-card-footer';
    it('Should output a CardFooter', () => {
        const wrapper = render(<CardFooter/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
    });
    it('Should set content props', () => {
        const wrapper = render(<CardFooter content='card content'/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(`${prefixCls}-content`)).toHaveLength(1);
        expect(wrapper.find(`${prefixCls}-content`).text()).toBe('card content');
    });
    it('Should set extra props', () => {
        const wrapper = render(<CardFooter extra='card extra'/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(`${prefixCls}-extra`)).toHaveLength(1);
        expect(wrapper.find(`${prefixCls}-extra`).text()).toBe('card extra');
    });
});

