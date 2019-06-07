import React from 'react';
import {render, mount, shallow} from 'enzyme';
import {renderToJson,mountToJson} from 'enzyme-to-json';
import Toast from '../index';

describe('Toast', () => {
    const prefixCls = '.hehe-toast';

    it('Should out a Toast', () => {
        class App extends React.Component {
            notify = () => {
                Toast.info('This is a toast tips !!!', 1);
            };
            render(){
                return (
                  <div>
                      {this.notify()}
                  </div>
                );
            }
        }
        const  wrapper = mount(<App />);
        expect(mountToJson(wrapper)).toMatchSnapshot();

    });
});