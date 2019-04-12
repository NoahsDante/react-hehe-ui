import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import HomeView from './homeView'

const AppRouter = () => (
    <Router>
        <HomeView/>
    </Router>
);

export default AppRouter;

