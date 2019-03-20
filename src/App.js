import React, {Component} from 'react';

import {Button,ToggleButtonGroup,HeaderNav} from '$components'

import './static/style/App.less';

class App extends Component {
    render() {
        this.handleClick = () => {
            console.log(this);
        }
        return (
            <div className="App">
                <HeaderNav>
                    <HeaderNav.Buttons  variant='link'>
                        <HeaderNav.Icon />
                        返回
                    </HeaderNav.Buttons>
                </HeaderNav>
                <header className="App-header">
                    <ToggleButtonGroup>
                        <Button href="https://react.docschina.org" fill={false} active round={true} onClick={this.handleClick}>dddd</Button>
                        <Button href="https://react.docschina.org" fill={false} round={true} onClick={this.handleClick}>dddd</Button>
                    </ToggleButtonGroup>
                </header>
            </div>
        );
    }
}

export default App;
