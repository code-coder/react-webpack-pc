import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../../layout/Toolbar';
import { Layout } from 'antd';

class UserList extends Component {
  render() {
    return (
      <Layout.Content className="col">
        <Toolbar {...this.props.location} title="用戶管理" />
        <div className="base-content-box">
          123<div style={{ height: '400px' }}>1</div>
        </div>
      </Layout.Content>
    );
  }
}

export default connect()(UserList);
