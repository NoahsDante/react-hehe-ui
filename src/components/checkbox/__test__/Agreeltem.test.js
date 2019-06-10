import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson,mountToJson} from 'enzyme-to-json';
import AgreeItem from '../AgreeItem';

describe('AgreeItem', () => {
    const prefixCls = '.hehe-checkbox-agree';
    it('Should output a AgreeItem', () => {
        const wrapper = render(<AgreeItem/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
        expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
    });
    it('Should return checkbox change', function () {
        const changeHandle = jest.fn();
        const wrapper = mount(<AgreeItem onChange={changeHandle}/>);
        expect(mountToJson(wrapper)).toMatchSnapshot();
        wrapper.find('input[type="checkbox"]').simulate('change', {target: {checked: true}});
        expect(wrapper.find('input[type="checkbox"]').prop('checked')).toBe(true);
        wrapper.find('input[type="checkbox"]').simulate('change', {target: {checked: false}});
        expect(wrapper.find('input[type="checkbox"]').prop('checked')).toBe(false);
    });
});