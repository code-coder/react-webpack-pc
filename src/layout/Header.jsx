import React from 'react';
import { Layout, Icon, Avatar, Tooltip } from 'antd';
import { connect } from 'react-redux';
import { changeLayout } from '../store/actions/global/layout';
const { Header } = Layout;

class _Header extends React.Component {
  render() {
    const { changeLayout, collapsed } = this.props;
    return (
      <Header className="main-header">
        <div className="row-center-between">
          {collapsed ? (
            <span
              onClick={() => {
                changeLayout({ collapsed: false });
              }}
              style={{ display: 'inline-block', marginLeft: '24px' }}
            >
              <Icon type="menu-unfold" style={{ fontSize: '22px' }} />
            </span>
          ) : (
            <span
              onClick={() => {
                changeLayout({ collapsed: true });
              }}
              style={{ display: 'inline-block', marginLeft: '24px' }}
            >
              <Icon type="menu-fold" style={{ fontSize: '22px' }} />
            </span>
          )}
          <div className="setting-box">
            <Avatar style={{ margin: '0 8px 2px 24px' }} size="small" alt="avatar" />
            <div className="user-name">
              <Tooltip
                title={
                  <div>
                    <p>管理员</p>
                  </div>
                }
              >
                <span>管理员</span>
              </Tooltip>
            </div>
          </div>
        </div>
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  collapsed: state.globalStore.layout.collapsed
});

const mapDispatchToProps = {
  changeLayout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Header);
