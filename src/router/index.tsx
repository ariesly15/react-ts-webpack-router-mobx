import React, { Component } from 'react';
import { Redirect, Route, Switch, RouteProps } from 'react-router';
import { appStore } from '../stores';
import { observer } from 'mobx-react';

// Pages Start
import Home from '../pages/Home';
import Login from '../pages/Login';
import App from '../App';
import Airtest from '../pages/Airtest'
import AirtestLog from '../pages/AirtestLog'
// Pages End

function PrivateRoute({ component: C, ...rest }: RouteProps) {
    return (
        <Route
            {...rest}
            render={props =>
                appStore.hasLogin ? (
                    <C {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

@observer
export default class RootRouters extends Component {
    render() {
        return (
            <Switch>
                <Route path='/login' component={Login} />
                <PrivateRoute path='/app' component={App} />
                <Route exact path='/airtest' component={Airtest} />
                <Route path='/airtest/log' component={AirtestLog} />
                <Route path='/' component={Home} />
            </Switch>
        );
    }
}
