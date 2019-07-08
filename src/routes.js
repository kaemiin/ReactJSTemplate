import React from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';
import { BasicLayout, DefaultLayout } from './containers/index';

const Routes = () => (
    <div>
        <Route exact path="/" name="Main" component={Main} />
        <Route exact path="/layout" name="Layout" component={DefaultLayout} />
        <Route exact path="/basic" name="Basic" component={BasicLayout} />
    </div>
);

export default Routes;
