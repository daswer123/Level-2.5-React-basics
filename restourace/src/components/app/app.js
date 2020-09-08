import React from 'react';
import {MainPage,CartPage} from '../pages';
import AppHeader from '../app-header';
import withRestoreService from "../hoc";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Background from './food-bg.jpg';
import ErrorBoundry from '../error-boundry';

const App = ({RestoService}) => {
    console.log(RestoService.getAllMenu());
    return (
        <Router>
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader total={50}/>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/cart" exact component={CartPage}/>
                    <Route component={ErrorBoundry}/>
                </Switch>
            
            </div>
        </Router>
    )
}

export default withRestoreService()(App);