import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider, Layout } from 'antd';
import store from './store';
import MenuSider from './layout/MenuSider';
import Header from './layout/Header';
import Router from './layout/Router';

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <Provider store={store}>
          <BrowserRouter>
            <Layout style={{ height: '100%' }}>
              <MenuSider />
              <Layout>
                <Header />
                <Router />
              </Layout>
            </Layout>
          </BrowserRouter>
        </Provider>
      </LocaleProvider>
    );
  }
}

export default App;
