import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import rootReducer from "./reducers";

import { Provider } from "react-redux";

import "./index.css";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { BrowserRouter, Route } from 'react-router-dom';
import PostsIndex from './containers/posts_index';

import ReduxPromise from 'redux-promise';

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(ReduxPromise)));


ReactDOM.render(
	<Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/api/posts" component={PostsIndex} />
                <Route exact path='/' component={PostsIndex}/>
            </div>
        </BrowserRouter>
   </Provider>,
	document.getElementById("root")
);