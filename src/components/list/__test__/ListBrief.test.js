import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import List from '../index';

describe('List', () => {
    const prefixCls = '.hehe-list';
    it('Should output a List', () => {
        const wrapper = render(
          <List renderHeader='header' renderFooter='footer'>
              <List.Brief>
                  SubTittle
              </List.Brief>
          </List>
        );
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(`${prefixCls}-brief`)).toHaveLength(1);
    });

});
