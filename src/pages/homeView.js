import React from 'react';
import {Link, Route} from 'react-router-dom';
import {List, WingBlank} from 'hehe-mobile';

import ListView from './listView'

const HomeView = () => {
    return (
        <WingBlank size='md'>
            <Route path='/' exact render={() => {
                const content = (
                    <List renderHeader={'Data-Display'}>
                        <Link to='/list'>
                            <List.Item arrow='horizontal' onClick={() => {}}>
                                list
                            </List.Item>
                        </Link>
                    </List>
                );
                return content;
            }}/>
            <Route path='/list' render={() => {
                return (<ListView/>);
            }}/>
        </WingBlank>
    );

}
export default HomeView




