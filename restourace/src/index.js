import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import ErrorBoundry from "./components/error-boundry";
import RestorService from "./services/resto-service";
import RestorServiceContext from "./components/resto-service-context";
import store from "./store";
import './index.scss';


const restoSevice = new RestorService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestorServiceContext.Provider value= {restoSevice}>
                <Router>
                    <App/>
                </Router>
            </RestorServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

