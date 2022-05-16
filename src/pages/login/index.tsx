import React, { Component } from 'react';
import utilsIndex from '@utils/index';
// import './style.scss';

interface Props { }

class LoginPage extends Component<Props> {
    componentDidMount() {
        const id = utilsIndex.getUrlParam('id');
        console.log('id', id);
    }

    render() {
        return (
            <div className="box">
                Hello, React.
                <span>here is login page.</span>
            </div>
        );
    }
}

export default LoginPage;
