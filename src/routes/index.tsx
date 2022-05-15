import React, { Component } from 'react';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import IndexPage from '../pages/index';
import LoginPage from '../pages/login/index';

import App from '../App';

//配置路由数组
const allRoutes = [
    {
        path: '/index',
        component: IndexPage,
        exact: false,
        title: '首页'
    }, {
        path: '/login',
        component: LoginPage,
        exact: false,
        title: '登录'
    }
];

const AppWrap = withRouter(App);
class AppRoute extends Component {
    render() {
        return (
            <Router>
                <AppWrap>
                    {renderRoutes(allRoutes.map(item => ({ ...item, key: item.path })))}
                </AppWrap>
            </Router>
        )
    }
}

export default AppRoute;