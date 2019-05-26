import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import Drawer from '../index';

describe('Drawer', () => {
    const prefixCls = '.hehe-drawer';

    it('Should output a Drawer', () => {
        const warpper = render(<Drawer
          sidebar={<div>Drawer展开</div>}
        />);
        expect(renderToJson(warpper)).toMatchSnapshot();
        expect(warpper.is(prefixCls)).toBe(true);
    });
    it('Should open Drawer', () => {
        const wrapper = shallow(<Drawer
          sidebar={<div>Drawer展开</div>}
        />);
        const instance = wrapper.instance();
        expect(instance).toBe(null);
    });
});
