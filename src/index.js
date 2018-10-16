import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/app';
import rootReducer from "./reducers";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const store = createStore(
	rootReducer,
	{},

)
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);