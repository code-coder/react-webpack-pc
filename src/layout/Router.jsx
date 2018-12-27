import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../containers/Home';
import Router from '../router';
const RouterArray = Object.values(Router);

class _Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        {RouterArray.map(menu => (
          <Switch key={menu.key}>
            <Route key={menu.key} path={menu.route} component={menu.component} />
            {menu.children &&
              Object.values(menu.children).map(item => (
                <Route key={item.key} path={item.route} component={item.component} />
              ))}
          </Switch>
        ))}
      </Switch>
    );
  }
}
export default _Router;
