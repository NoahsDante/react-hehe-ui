import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import Button from '../index';

describe('Button', () => {
    it('Should output a button', () => {
        const wrapper = render(<Button><span>default</span></Button>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is('a')).toBe(true);
    });
});