import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history, store } from './store';
import Routes from './routes';
import { getLanguage, setLanguage } from './constants/Config';
import { getLocale } from './utils/Locale';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/index.css';

/*global lang*/
let language = lang;

setLanguage(language);

const locale = getLocale(getLanguage());
addLocaleData(locale.data);

const PrivateRouteContainer = function(props) {
    if (props.isAuthenticated) {
        return <Route component={Routes} />
    }
};

const PrivateRoute = connect(state => ({
    isAuthenticated: state.authReducer.isAuthenticated
}))(PrivateRouteContainer);

const ConnectedSwitch = connect(state => ({
    location: state.location
}))(Switch);

const AppContainer = ({ location }) => (
    <ConnectedSwitch>
        <PrivateRoute />
    </ConnectedSwitch>
);

const App = connect(state => ({
    location: state.location,
}))(AppContainer);

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale={locale.locale} messages={locale.messages}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </IntlProvider>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
