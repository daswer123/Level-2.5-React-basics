import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {BrowserRouter as Router} from "react-router-dom";
import TaskContext from "./components/taskContext";
import TaskInfo from "./services/service";
import ErrorBoundry from "./components/errorBoundry"
import {Provider} from "react-redux";
import store from "./store";
import './index.css';
import * as firebase from "firebase"
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDCgKn5drHD0kL6RawTiY3LNVw6tEQUJLo",
  authDomain: "todoapp-d8181.firebaseapp.com",
  databaseURL: "https://todoapp-d8181.firebaseio.com",
  projectId: "todoapp-d8181",
  storageBucket: "todoapp-d8181.appspot.com",
  messagingSenderId: "524163508174",
  appId: "1:524163508174:web:f07302269e5fa97189ad9f",
  measurementId: "G-F9V08JQVGX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.database()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <TaskContext.Provider value={TaskInfo}>
        <Router>
            <App/>
        </Router>
      </TaskContext.Provider>
    </ErrorBoundry>
  </Provider>
  ,
  document.getElementById('root')
);
