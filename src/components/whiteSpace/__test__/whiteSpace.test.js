import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import WhiteSpace from '../index';

describe('WhiteSpace', () => {
    const prefixCls = '.hehe-whitespace';

    it('Should out a WhiteSpace', () => {
        const wrapper = render( <WhiteSpace size='sm'/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
    });
    it('Should set props size', () => {
        const wrapper = shallow( <WhiteSpace size='md'/>);
        expect(wrapper.find(`${prefixCls}-md`)).toHaveLength(1);
        wrapper.setProps({size:'lg'});
        expect(wrapper.find(`${prefixCls}-lg`)).toHaveLength(1);
    });
});