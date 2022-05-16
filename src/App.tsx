import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './style.scss';

interface Props extends RouteComponentProps {
    children: any;
}

class App extends Component<Props> {
    handleRoute = () => {
        const { location, history } = this.props;
        const { pathname } = location;

        // 自动去首页
        if (pathname === '/') {
            history.push('index');
            return false;
        }
        return true;
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                {
                    this.handleRoute() ? children : 'other'
                }
            </div>
        );
    }
}

export default App;
