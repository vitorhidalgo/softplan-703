import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/css/fonts.css'
import '../assets/css/structure.css'

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Search from '../components/Search';

import Main from '../pages/main';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <div className="container">
            <Sidebar />
            <Search />
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Routes;