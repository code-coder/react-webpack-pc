import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Button } from 'antd';
import RouterData from '../router';
import { get } from 'lodash';

const { Item } = Breadcrumb;

class Toolbar extends Component {
  render() {
    const paths = this.props.pathname
      .split('/')
      .filter(i => i)
      .map(i => i.toUpperCase().replace('-', '_'));
    const extraBreadcrumbItems = paths.map((item, index) => {
      const router = get(RouterData, paths.slice(0, index + 1).join('.children.'), {});
      return (
        <Item key={router.key}>
          <Link to={router.route}>{router.title}</Link>
        </Item>
      );
    });
    const { cancleConf = {}, submitConf = {}, title, children, noBorder } = this.props;
    return (
      <div className="tool-box" style={{ borderBottom: noBorder ? 'none' : '1px solid #e0e0e0' }}>
        <Breadcrumb>{extraBreadcrumbItems}</Breadcrumb>
        {children ? (
          <div className="row-center-between">
            <p className="title">{title}</p>
            <div className="btns-wrapper">{children}</div>
          </div>
        ) : (
          <div className="row-center-between">
            <p className="title">{title}</p>
            {(cancleConf.handler || submitConf.handler) && (
              <div className="btns" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button disabled={cancleConf.disabled} onClick={cancleConf.handler}>
                  取消
                </Button>
                <Button
                  type="primary"
                  disabled={submitConf.disabled}
                  onClick={submitConf.handler}
                  style={{ marginLeft: '10px' }}
                >
                  保存
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Toolbar;
