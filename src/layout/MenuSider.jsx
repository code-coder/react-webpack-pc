import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import Router from '../router';
const { Sider } = Layout;
const { SubMenu, Item } = Menu;
const RouterArray = Object.values(Router);

class MenuSider extends Component {
  render() {
    const { location } = this.props;
    const { collapsed, menuSiderRemoved, rem } = this.props;
    const selectKey = location.pathname;
    let width = menuSiderRemoved ? 0 : 256;
    if (width < 170) width = 170;
    return (
      <Sider className="menu-sider" collapsed={collapsed} width={width} trigger={null} collapsible>
        <div className="logo">{!collapsed ? <div>logo big</div> : <div>logo mini</div>}</div>
        <Menu theme="dark" mode="inline" selectedKeys={[selectKey]}>
          {RouterArray.map(menu => (
            <SubMenu
              key={menu.key}
              title={
                <span>
                  <Icon type={menu.icon} />
                  <span>{menu.title}</span>
                </span>
              }
            >
              {menu.children &&
                Object.values(menu.children).map(item => (
                  <Item key={menu.route + item.route}>
                    <Link to={menu.route + item.route}>
                      <span>{item.title}</span>
                    </Link>
                  </Item>
                ))}
            </SubMenu>
          ))}
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = state => ({
  menuSiderRemoved: state.globalStore.layout.menuSiderRemoved,
  collapsed: state.globalStore.layout.collapsed
});

export default withRouter(connect(mapStateToProps)(MenuSider));
