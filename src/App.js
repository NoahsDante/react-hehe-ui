import React, {Component} from 'react';

import {Button} from '$components'

import './static/style/App.less';

class App extends Component {
    render() {
        this.handleClick = () => {
            console.log(this);
        }
        return (
            <div className="App">
            </div>
        );
    }
}

export default App;
