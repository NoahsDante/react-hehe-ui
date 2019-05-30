import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import List from '../index';

describe('List', () => {
    const prefixCls = '.hehe-list';
    it('Should output a List', () => {
        const wrapper = render(
          <List renderHeader='header' renderFooter='footer'>
              render List
          </List>
        );
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
        expect(wrapper.find(`${prefixCls}-header`)).toHaveLength(1);
        expect(wrapper.find(`${prefixCls}-footer`)).toHaveLength(1);
    });

});
