import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {mountToJson, renderToJson} from 'enzyme-to-json';
import {AlertElement} from '../alert';

describe('Alert', () => {
    const prefixCls = '.hehe-modal';
    it('Should out a Alert', () => {
        const wrapper = mount(<AlertElement/>);
        expect(mountToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(`${prefixCls}-content`)).toHaveLength(1);
    });
    it('Should set props', () => {
        const wrapper = mount(<AlertElement title='Delete' message='Are you sure???'/>);
        expect(mountToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(`${prefixCls}-title`)).toHaveLength(1);
        expect(wrapper.find(`${prefixCls}-alert-content`)).toHaveLength(1);
    });
    it('Should call click callback ', () => {
        const clickHandle = jest.fn();
        const wrapper = mount(<AlertElement
          onClose={clickHandle}
          title='Delete'
          message='Are you sure???'
          actions={[
              {text: 'Cancel', onPress: clickHandle},
          ]}
        />);
        expect(mountToJson(wrapper)).toMatchSnapshot();
        wrapper.find(`${prefixCls}-button`).simulate('click');
        expect(clickHandle).toBeCalled();
    });

});