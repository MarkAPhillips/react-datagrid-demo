import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/';
import router from './app.routes';

const store = configureStore();

render(
    <Provider store={store}>
        {router()}
    </Provider>,
	document.getElementById('app')
);
