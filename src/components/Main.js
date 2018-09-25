import React from 'react';
import PropTypes from 'prop-types';
import { kea } from 'kea';
import { call, put } from 'redux-saga/effects';
import { defineMessages, injectIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isEmptyObj } from '../utils/MyHelper';
import logo from '../assets/logo.svg';
import ClownAPI from '../processes/Clown';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../assets/scss/style.scss';

library.add(faCoffee);

const messages = defineMessages({
    systemError: {
        id: 'App.systemError',
        defaultMessage: 'SYSTEM ERROR',
    },
});

const logic = kea({
    actions: () => ({
        say: (data) => data,
        setTitle: () => true,
        updateTitle: (data) => data,
    }),
    reducers: ({ actions }) => ({
        title: ['', PropTypes.string, {
            [actions.updateTitle]: (state, payload) => state = payload,
        }],
    }),
    selectors: ({ selectors }) => ({
        fullTitle: [
            () => [selectors.title], (state) => isEmptyObj(state) ? '' : `THE TITLE: ${state}`, PropTypes.string
        ],
    }),
    start: function * () {
        const { say, setTitle } = this.actions;
        yield put(say('SAY HELLO'));
        yield put(setTitle());
    },
    takeEvery: ({ actions, workers }) => ({
        [actions.say]: function * (action) {
            alert(action.payload);
            try {
                const result = yield call(ClownAPI.sayHello, action.payload);
                if (result) {
                    console.log(result);
                }
            } catch(error) {
                // NO TO IMPLEMENT
            }
        },
    }),
    takeLatest: ({ actions, workers }) => ({
        [actions.setTitle]: workers.setTitle,
    }),
    workers: {
        * setTitle (action) {
            const { updateTitle } = this.actions;
            yield put(updateTitle('Welcome to React'));
        },
    }
});

const Header = (props) => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{props.title}</h1>
    </header>
);

const Main = (props) => (
    <div className="App">
        <Header title={props.fullTitle} />
        <p className="App-intro">
            {props.intl.formatMessage(messages.systemError)}
        </p>
        <FontAwesomeIcon icon="coffee" />
        <h1>Test</h1>
    </div>
);

export default logic(injectIntl(Main));
