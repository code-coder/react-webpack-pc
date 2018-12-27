import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGlobalData } from '../../store/actions/global/global-data';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(setGlobalData({ title: 'home' }));
  }
  render() {
    return <div className="home">home</div>;
  }
}

export default connect()(Home);
