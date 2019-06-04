import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import RadioItem from '../RadioItem';

describe('RadioItem', () => {
    const prefixCls = '.hehe-radio';
    const data = [
        { value: 0, label: 'doctor' },
        { value: 1, label: 'bachelor' },
    ];

    it('Should out a RadioItem', () => {
        const wrapper = render(<div>
            {data.map(i =>
              <RadioItem key={i.value} checked={0 === i.value} onChange={() => this.onChange(i.value)}>
                  {i.label}
              </RadioItem>
            )}
        </div>);
        expect(renderToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find(`${prefixCls}-item`)).toHaveLength(2);
    });
});