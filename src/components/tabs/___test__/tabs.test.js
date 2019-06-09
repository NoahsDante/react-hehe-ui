import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson,mountToJson,shallowToJson} from 'enzyme-to-json';
import Tabs from '../index';

describe('Tabs', () => {
    const prefixCls = '.hehe-tabs';
    const tabs = [
        {title: 'First Tab'},
        {title: 'Second Tab'},
        {title: 'Third Tab'},
    ];
    it('Should out a Tabs', () => {
        const  wrapper = render( <Tabs tabs={tabs}>
            <div>
                Content of first tab
            </div>
            <div>
                Content of second tab
            </div>
            <div>
                Content of third tab
            </div>
        </Tabs>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.is(prefixCls)).toBe(true);
    });

});