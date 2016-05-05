import React from 'react';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from 'react-dom';

//Reducers
import accountDetails from './Reducers/accountDetails';
import userDetails from './Reducers/userDetails';
import billingContact from './Reducers/billingContact';
import ui from './Reducers/ui';
const reducers = combineReducers({accountDetails, userDetails, billingContact, ui});

//Container
import AppContainer from './Containers/AppContainer';

//Store
const store = createStore(reducers, {}, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

const root = document.getElementById('app');

render((
	<Provider store={store}>
		<AppContainer/>
	</Provider>
), root);