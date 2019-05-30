import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import List from '../index';

describe('List', () => {
    const prefixCls = '.hehe-list';
    it('Should output a List Item', () => {
        const wrapper = render(
          <List renderHeader='header' renderFooter='footer'>
              <List.Item arrow='horizontal' extra={'哈哈'} error>
                  报错了
              </List.Item>
              <List.Item multipleLine wrap>
                  multipleLine | 多行 | Boolean | `false` |multipleLine | 多行 | Boolean | `false`
                  |multipleLine | 多行 | Boolean | `false` |multipleLine | 多行 | Boolean | `false`
                  |multipleLine | 多行 | Boolean | `false` |multipleLine | 多行 | Boolean | `false`
                  |multipleLine | 多行 | Boolean | `false` |multipleLine | 多行 | Boolean | `false` |
              </List.Item>
          </List>
        );
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(`${prefixCls}-item`)).toHaveLength(2);
        expect(wrapper.find(`${prefixCls}-extra`).text()).toBe('哈哈');
        expect(wrapper.find(`${prefixCls}-arrow-horizontal`)).toHaveLength(1);
        expect(wrapper.find(`${prefixCls}-line-multiple`)).toHaveLength(1);
        expect(wrapper.find(`${prefixCls}-line-wrap`)).toHaveLength(1);

    });
    it('Should call click callback', () => {
        const clickHandle = jest.fn();
        const wrapper = mount(
          <List renderHeader='header' renderFooter='footer'>
              <List.Item onClick={clickHandle}>
                  你过来点我呀
              </List.Item>
          </List>
        );
        wrapper.find(`${prefixCls}-item`).simulate('click');
        expect(clickHandle).toBeCalled();
    });

});
