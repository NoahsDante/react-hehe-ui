import React from 'react';
import {List, Checkbox, Flex} from 'hehe-mobile';


const ButtonView = () => {
    const onChange = (val) => {
        console.log(val);
    };
    const data = [
        {value: 0, label: 'Ph.D.'},
        {value: 1, label: 'Bachelor'},
        {value: 2, label: 'College diploma'},
    ];
    return (
      <div>
          <List renderHeader={() => 'CheckboxItem demo'}>
              {data.map(i => (
                <Checkbox.Item key={i.value} onChange={() => onChange(i.value)}>
                    {i.label}
                </Checkbox.Item>
              ))}
              <Checkbox.Item key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
                  Undergraduate<List.Brief>Auxiliary text</List.Brief>
              </Checkbox.Item>
          </List>
          <Flex>
              <Flex.Item>
                  <Checkbox.AgreeItem data-seed="logId" change={e => console.log('checkbox', e)}>
                      Agree <a href='#' onClick={(e) => {
                      e.preventDefault();
                      alert('agree it');
                  }}>agreement</a>
                  </Checkbox.AgreeItem>
              </Flex.Item>
          </Flex>
      </div>
    );
};
export default ButtonView;