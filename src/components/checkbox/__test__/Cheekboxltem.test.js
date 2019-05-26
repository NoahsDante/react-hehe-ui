import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import CheckboxItem from '../CheckboxItem';

describe('CheckboxItem', () => {
    const prefixCls = '.hehe-checkbox-item';
    it('Should output a CheckboxItem', () => {
        const wrapper = render(<CheckboxItem/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
        expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
    });
    it('Should return checkbox change', function () {
        const changeHandle = jest.fn();
        const wrapper = mount(<CheckboxItem onChange={changeHandle}/>);
        wrapper.find('input[type="checkbox"]').simulate('change', {target: {checked: true}});
        expect(wrapper.find('input[type="checkbox"]').prop('checked')).toBe(true);
        wrapper.find('input[type="checkbox"]').simulate('change', {target: {checked: false}});
        expect(wrapper.find('input[type="checkbox"]').prop('checked')).toBe(false);
    });

});