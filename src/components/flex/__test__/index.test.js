import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import Flex from '../index';

describe('Flex', () => {
    const prefixCls = '.hehe-flexbox';

    it('Should output a Flex', () => {
        const wrapper = render(<Flex/>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
    });
    it('Should set props direction', () => {
        const wrapper = render(<Flex direction='row'/>);
        const prefixClsProps = `${prefixCls}-dir`;
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(`${prefixClsProps}-row`)).toBe(true);

        const wrapperShallow = shallow(<Flex direction='row'/>);
        wrapperShallow.setProps({direction:'row-reverse'});
        expect(wrapperShallow.is(`${prefixClsProps}-row-reverse`)).toBe(true);

        wrapperShallow.setProps({direction:'column'});
        expect(wrapperShallow.is(`${prefixClsProps}-column`)).toBe(true);

        wrapperShallow.setProps({direction:'column-reverse'});
        expect(wrapperShallow.is(`${prefixClsProps}-column-reverse`)).toBe(true);
    });
    it('Should set props wrap', () => {
        const wrapper = render(<Flex wrap='nowrap'/>);
        const prefixClsProps = `${prefixCls}-wrap`;
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(`${prefixCls}-nowrap`)).toBe(true);

        const wrapperShallow = shallow(<Flex wrap='nowrap'/>);
        wrapperShallow.setProps({wrap:'wrap'});
        expect(wrapperShallow.is(`${prefixClsProps}`)).toBe(true);

        wrapperShallow.setProps({wrap:'wrap-reverse'});
        expect(wrapperShallow.is(`${prefixClsProps}-reverse`)).toBe(true);
    });
    it('Should set props justify', () => {
        const wrapper = render(<Flex justify='start'/>);
        const prefixClsProps = `${prefixCls}-justify`;
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(`${prefixClsProps}-start`)).toBe(true);

        const wrapperShallow = shallow(<Flex justify='start'/>);
        wrapperShallow.setProps({justify:'end'});
        expect(wrapperShallow.is(`${prefixClsProps}-end`)).toBe(true);

        wrapperShallow.setProps({justify:'center'});
        expect(wrapperShallow.is(`${prefixClsProps}-center`)).toBe(true);

        wrapperShallow.setProps({justify:'between'});
        expect(wrapperShallow.is(`${prefixClsProps}-between`)).toBe(true);

        wrapperShallow.setProps({justify:'around'});
        expect(wrapperShallow.is(`${prefixClsProps}-around`)).toBe(true);
    });
    it('Should set props align', () => {
        const wrapper = render(<Flex align='start'/>);
        const prefixClsProps = `${prefixCls}-align`;
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(`${prefixClsProps}-start`)).toBe(true);

        const wrapperShallow = shallow(<Flex align='start'/>);
        wrapperShallow.setProps({align:'end'});
        expect(wrapperShallow.is(`${prefixClsProps}-end`)).toBe(true);

        wrapperShallow.setProps({align:'center'});
        expect(wrapperShallow.is(`${prefixClsProps}-center`)).toBe(true);

        wrapperShallow.setProps({align:'baseline'});
        expect(wrapperShallow.is(`${prefixClsProps}-baseline`)).toBe(true);

        wrapperShallow.setProps({align:'stretch'});
        expect(wrapperShallow.is(`${prefixClsProps}-stretch`)).toBe(true);
    });
    it('Should set props alignContent', () => {
        const wrapper = render(<Flex alignContent='start'/>);
        const prefixClsProps = `${prefixCls}-align-content`;
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(`${prefixClsProps}-start`)).toBe(true);

        const wrapperShallow = shallow(<Flex alignContent='start'/>);
        wrapperShallow.setProps({alignContent:'end'});
        expect(wrapperShallow.is(`${prefixClsProps}-end`)).toBe(true);

        wrapperShallow.setProps({alignContent:'center'});
        expect(wrapperShallow.is(`${prefixClsProps}-center`)).toBe(true);

        wrapperShallow.setProps({alignContent:'between'});
        expect(wrapperShallow.is(`${prefixClsProps}-between`)).toBe(true);

        wrapperShallow.setProps({alignContent:'around'});
        expect(wrapperShallow.is(`${prefixClsProps}-around`)).toBe(true);

        wrapperShallow.setProps({alignContent:'stretch'});
        expect(wrapperShallow.is(`${prefixClsProps}-stretch`)).toBe(true);
    });

});
