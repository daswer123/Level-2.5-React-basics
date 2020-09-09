import React from 'react';
import {MainPage,CartPage,MenuPage} from '../pages';
import AppHeader from '../app-header';
import withRestoreService from "../hoc";
import {Switch,Route} from "react-router-dom";
import Background from './food-bg.jpg';
import ErrorBoundry from '../error-boundry';

const App = ({RestoService}) => {
    return (
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader total={50}/>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/cart" exact component={CartPage}/>
                    <Route path="/menu/:id" exact render={ ({match})=>{
                        const {id} = match.params;
                        return <MenuPage itemId={id}/>
                    }}/>
                    <Route component={ErrorBoundry}/>
                </Switch>
            
            </div>
    )
}

export default withRestoreService()(App);