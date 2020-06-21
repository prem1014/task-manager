import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import routesConfig from './config';
import NavBar from '../Layout/NavBar.component';
import IRoutes from './types';

const AppRoutes = () => {
    return (
        <React.Fragment>
            <Router>
                <NavBar />
                <Switch>
                    {
                        routesConfig && routesConfig.length > 0 && routesConfig.map( (routeConfig: IRoutes, i) => (
                            <Route
                                key={i}
                                path={routeConfig.path}
                                component={routeConfig.component}
                            ></Route>
                        ))
                    }
                    <Redirect from="/" exact to="home" />
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default AppRoutes;