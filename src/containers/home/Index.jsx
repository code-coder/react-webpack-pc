import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from "./Home";

class HomeRoute extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={`${match.url}`} component={Home} />
      </Switch>
    );
  }
}

export default HomeRoute;
