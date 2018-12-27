import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGlobalData } from '../store/actions/global/global-data';
import { Layout } from 'antd';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(setGlobalData({ title: 'home' }));
  }
  render() {
    return <Layout.Content>home</Layout.Content>;
  }
}

export default connect()(Home);
