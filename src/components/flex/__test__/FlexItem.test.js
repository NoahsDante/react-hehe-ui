import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import FlexItem from '../FlexItem';

describe('FlexItem', () => {
    const prefixCls = '.hehe-flexbox';

    it('Should output a FlexItem', () => {
        const wrapper = render(<FlexItem />);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(`${prefixCls}-item`)).toBe(true);
    });
});
