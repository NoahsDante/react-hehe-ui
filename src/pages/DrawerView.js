import React from 'react';
import {Drawer, List, Button, WhiteSpace} from 'hehe-mobile';


class DrawerView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            docked: false
        };
    }

    onOpenChange = (...arg) => {
        console.log(this);
        console.log(arg);
        this.setState({
            open: !this.state.open
        })
    }
    onDock = () => {
        this.setState({
            docked: !this.state.docked
        })
    }

    render() {
        const sidebar = (<List>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
                if (index === 0) {
                    return (<List.Item key={index}
                                       thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                                       multipleLine
                    >Category</List.Item>);
                }
                return (<List.Item key={index}
                                   thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                >Category{index}</List.Item>);
            })}
        </List>);
        return (
          <div>
              <WhiteSpace/>
              <Button variant="primary" onClick={this.onOpenChange}
                      style={{position: 'fixed', zIndex: '1', width: 'calc(100% - 16px)'}}>点我打开抽屉</Button>
              <Button variant="primary" onClick={this.onDock} style={{
                  position: 'fixed',
                  zIndex: '1',
                  top: '65px',
                  width: 'calc(100% - 16px)'
              }}>点我打开抽屉是(docked)否加入文档</Button>
              <Drawer
                contentStyle={{color: '#A6A6A6', textAlign: 'center', paddingTop: 42}}
                open={this.state.open}
                sidebarStyle={{border: '1px solid #ddd'}}
                onOpenChange={this.onOpenChange}
                sidebar={sidebar}
                docked={this.state.docked}
              />

          </div>
        );
    }

}


export default DrawerView;