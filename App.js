/**
 * Created by itryt on 26-Mar-17.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware  from 'redux-saga'

import Main from './src/app/main';

import watchColorChanged from './src/saga/sagas'
import colorApp from './src/redux/reducers/index'

export default class App extends Component {
    render() {
        const sagaMiddleware = createSagaMiddleware()

        const store = createStore(colorApp, applyMiddleware(sagaMiddleware))

        sagaMiddleware.run(watchColorChanged)

        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }

}

