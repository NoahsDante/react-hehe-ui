import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import WingBlank from '../index';

describe('WingBlank', () => {
    const prefixCls = '.hehe-wingblank';

    it('Should out a WingBlank', () => {
        const wrapper = render( <WingBlank size='sm'/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
    });
    it('Should set props size', () => {
        const wrapper = shallow( <WingBlank size='md'/>);
        expect(wrapper.find(`${prefixCls}-md`)).toHaveLength(1);
        wrapper.setProps({size:'lg'});
        expect(wrapper.find(`${prefixCls}-lg`)).toHaveLength(1);
    });
});