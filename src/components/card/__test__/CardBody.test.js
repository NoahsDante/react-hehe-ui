import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import CardBody from '../CardBody';

describe('CardBody', () => {
    const prefixCls = '.hehe-card-body';
    it('should output a CardBody', () => {
        const wrapper = render(<CardBody>CardBody</CardBody>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
    });
});

