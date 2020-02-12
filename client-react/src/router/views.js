import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export default class componentName extends Component {
    render() {
        return (
            <Switch>
                <Redirect from="/" to="/login" exact />
                {this.props.routes.map(item => {
                    const Comp = item.component;
                    return (
                        <Route
                            path={item.path}
                            key={item.name}
                            component={prop => {
                                if (item.children) {
                                    return <Comp {...item.children} {...prop} />;
                                } else {
                                    return <Comp {...prop} />;
                                }
                            }}
                        />
                    );
                })}
            </Switch>
        );
    }
}
