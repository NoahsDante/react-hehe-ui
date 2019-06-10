import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson,mountToJson} from 'enzyme-to-json';
import Drawer from '../index';

describe('Drawer', () => {
    const prefixCls = '.hehe-drawer';

    it('Should output a Drawer', () => {
        const wrapper = render(<Drawer
          sidebar={<div>Drawer展开</div>}
        />);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
    });
    it('Should open Drawer', () => {
        const wrapper = mount(<Drawer
          open={false}
          sidebar={<div>Drawer展开</div>}
        />);
        expect(mountToJson(wrapper)).toMatchSnapshot();
        wrapper.setProps({open: true});
        expect(wrapper.find('.hehe-drawer-overlay').prop('style')).toEqual({"opacity": 1, "visibility": "visible"});
        wrapper.setProps({open: false});
        expect(wrapper.find('.hehe-drawer-overlay').prop('style')).toEqual({});
    });
    it('Should open docked', () => {
        const wrapper = mount(<Drawer
          docked={true}
          sidebar={<div>Drawer展开</div>}
        />);
        const domNode = wrapper.find('.hehe-drawer-sidebar').getDOMNode();
        expect(mountToJson(wrapper)).toMatchSnapshot();
        console.log(getComputedStyle(domNode));
        wrapper.setProps({docked: true});
        console.log(getComputedStyle(domNode));
        wrapper.setProps({docked: false});
        console.log(getComputedStyle(domNode));
    });
});
