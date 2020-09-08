import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
// import * as actions from "./actions";
import reduce from "./reducer";
import App from "./components/App";

let state = createStore(reduce);
// const {inc,dec,res} = bindActionCreators(actions,state.dispatch);

ReactDOM.render(
    <Provider store={state}>
            <App/>
    </Provider>,document.getElementById("root"));

// state.subscribe(update)
