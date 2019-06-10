import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson, mountToJson} from 'enzyme-to-json';
import SearchBar from '../index';

describe('SearchBar', () => {
    const prefixCls = '.hehe-search';

    it('Should out a SearchBar', () => {
        const wrapper = render( <SearchBar placeholder="Search" maxLength={8} />);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
    });
    it('Should autoFocus',() => {
        const focusHandle = jest.fn();
        const wrapper = mount( <SearchBar placeholder="自动获取光标" onFocus={focusHandle} />);
        expect(mountToJson(wrapper)).toMatchSnapshot();
        wrapper.find('input[type="search"]').simulate('focus');
        expect(focusHandle).toBeCalled();

    });
});