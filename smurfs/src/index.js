import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";

import {smurfReducer} from './reducers';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store= createStore(smurfReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById("root"));