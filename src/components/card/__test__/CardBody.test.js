import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import CardBody from '../CardBody';

describe('CardBody', () => {
    const prefixCls = '.hehe-card-body';
    it('should output a CardBody', () => {
        const warpper = render(<CardBody>CardBody</CardBody>);
        expect(renderToJson(warpper)).toMatchSnapshot();
        expect(warpper.is(prefixCls)).toBe(true);
    });
});

