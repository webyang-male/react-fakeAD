import React, { Component } from 'react';
import './style.scss';
import { RouteComponentProps } from 'react-router-dom';

interface Pros extends RouteComponentProps {
  children: any;
}

class App extends Component<Pros>{
  handleRoute = () => {
    const { location, history } = this.props;
    const { pathname } = location;
    //自动去首页
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
        {this.handleRoute() ? children : 'other'}
      </div>

    )
  }
}

export default App;