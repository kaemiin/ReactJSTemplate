import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { activatePlugin, keaReducer } from 'kea';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import sagaPlugin, { keaSaga } from 'kea-saga';
import createSagaMiddleware from 'redux-saga';
import { isEmptyObj } from './utils/MyHelper';
import { HISTORY_PATH_KEY, TOKEN_KEY } from './constants/Config';

const history = createHashHistory();

const middleware = routerMiddleware(history);

const authInitialState = {
    isAuthenticated: true, // TODO DEFAULT IS false
};

const authReducer = (state = authInitialState , action) => {
    const data = action.payload;
    if (!data || isEmptyObj(data) || !action.type.startsWith('auth')) {
        return { ...state };
    }
    switch (data.type) {
    case 'AUTH_SUCCESS':
        return Object.assign({}, ...state, {
            isAuthenticated: true
        });
    case 'AUTH_FAIL':
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(HISTORY_PATH_KEY);
        return Object.assign({}, ...state, {
            isAuthenticated: false
        });
    case 'LOGOUT_USER':
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(HISTORY_PATH_KEY);
        return Object.assign({}, ...state, {
            isAuthenticated: false
        });
    default: 
        return { ...state };
    }
};

const historyReducer = (state = [] , action) => {
    const data = action.payload;
    if (!data || isEmptyObj(data) || !action.type.startsWith('history')) {
        return { ...state };
    }
    switch (data.type) {
    case 'CURRENT_PAGE':
        let historys = localStorage.getItem(HISTORY_PATH_KEY);
        if (historys === null) {
            historys = [];
        } else {
            historys = JSON.parse(historys);
        }
        historys.push(data.value);
        localStorage.setItem(HISTORY_PATH_KEY, JSON.stringify(historys));
        return true;
    case 'CLEAN_HISTORY':
        localStorage.removeItem(HISTORY_PATH_KEY);
        return true;
    default: 
        return false;
    }
};

activatePlugin(sagaPlugin);

const reducers = combineReducers({
    kea: keaReducer('kea'),
    scenes: keaReducer('scenes'),
    authReducer,
    historyReducer,
});

const sagaMiddleware = createSagaMiddleware();
const finalCreateStore = compose(
    applyMiddleware(middleware, sagaMiddleware)
)(createStore);

const store = finalCreateStore(connectRouter(history)(reducers));

sagaMiddleware.run(keaSaga);

export { history, store };
