import React from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';

const Routes = () => (
    <div>
        <Route exact path="/" name="Main" component={Main} />        
    </div>
);

export default Routes;
