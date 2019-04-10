import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import {WingBlank} from 'hehe-mobile';



const HomeView = () => {
    return (
        <WingBlank size='md'>dddd</WingBlank>
    );
};

const AppRouter = () => (
    <Router>
        <HomeView/>
    </Router>
);

export default AppRouter;

