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
        const wrapper = mount(<Drawer
          open={false}
          sidebar={<div>Drawer展开</div>}
        />);
        wrapper.setProps({open: true});
        expect(wrapper.find('.hehe-drawer-overlay').prop('style')).toEqual({"opacity": 1, "visibility": "visible"});
        wrapper.setProps({open: false});
        expect(wrapper.find('.hehe-drawer-overlay').prop('style')).toEqual({});
    });
});
