import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import CardHeader from '../CardHeader';

import icon from '$images/icon.png';

describe('CardHeader', () => {
    const prefixCls = '.hehe-card-header';
    it('Should output a CardHeader', () => {
        const wrapper = render(<CardHeader/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
    });
    it('Should set extra props', () => {
        const wrapper = render(<CardHeader extra='card extra'/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(`${prefixCls}-extra`)).toHaveLength(1);
        expect(wrapper.find(`${prefixCls}-extra`).text()).toBe('card extra');
    });
    it('Should set title props', () => {
        const wrapper = render(<CardHeader title='card title'/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(`${prefixCls}-content`)).toHaveLength(1);
        expect(wrapper.find(`${prefixCls}-content`).text()).toBe('card title');
    });
    it('Should set thumb props', () => {
        const wrapper = render(<CardHeader thumb={icon}/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('img')).toHaveLength(1);
    });
});

