import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import Stepper from '../index';

describe('Stepper', () => {
    const prefixCls = '.hehe-stepper';

    it('Should out a Stepper', () => {
        const wrapper = render(<Stepper
          style={{width: '100%', minWidth: '100px'}}
          showNumber
          max={10}
          min={1}
        />);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
    });
});