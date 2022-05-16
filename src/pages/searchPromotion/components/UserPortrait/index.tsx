import React, { Component } from 'react';
import { Empty } from 'antd';
import './style.scss';
import axios from 'axios';

interface IProps { }

class UserPortrait extends Component<IProps> {
    state = {
        isEmpty: true,
    }

    // componentWillMount = () => {
    //     axios.get('/ad/ddd').then(() => {
    //         this.setState({
    //             isEmpty: false,
    //         });
    //     })
    // }

    render() {
        const { isEmpty } = this.state;
        return (
            <div className="user-portrait-component-box">
                {
                    isEmpty ? (
                        <Empty
                            description="您的广告展现积累用户较少，无法得出准确用户画像"
                        />
                    ) : (
                        <div>用户画像信息</div>
                    )
                }
            </div>
        );
    }
}

export default UserPortrait;
