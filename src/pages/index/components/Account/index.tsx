import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
// import { ThemeContext, ThemeType } from 'context/theme';
import './style.scss';

interface IProps {
    fetchUserBalance?: (params?: any) => void;
    userBalance: any;
}

interface IStates {
    // status: number;
    // balance: number;
    // creditValue: number;
}

class Account extends React.Component<IProps, IStates> {
    // state = {
    //     status: 0, // 0表示账户金未到，1表示已到
    //     balance: 0,
    //     creditValue: 0,
    // }

    componentWillMount = () => {
        const params = { name: 'jack' };
        const { fetchUserBalance } = this.props;
        if (fetchUserBalance) {
            fetchUserBalance(params);
        }
    }

    componentDidMount = () => {
        // setTimeout(() => {
        //     this.setState({
        //         status: 1,
        //         balance: 220,
        //         creditValue: 780,
        //     });
        // }, 2000);
    }

    render() {
        // const { status, balance, creditValue } = this.state;
        const { userBalance } = this.props;
        const {
            name = '', balance = 0, status = 0, credit = 0,
        } = userBalance;
        return (
            <div className="account-component-box">
                <div>
                    你好，
                    {name}
                </div>
                <div className="examine">
                    {
                        status === 0 ? (
                            <div className="status">开户金未到</div>
                        ) : (
                            <div className="status-ok">开户金已到</div>
                        )
                    }
                </div>
                <div className="balance">
                    <div>
                        <div className="text">推广余额</div>
                        <div className="value">{balance}</div>
                    </div>
                    <Button type="primary" size="small">充值</Button>
                </div>
                <div className="credit">
                    <div>
                        <div className="text">合规信用值</div>
                        <div className="value">{credit}</div>
                    </div>
                    <div className="detail-text">详情</div>
                </div>
            </div>
        );
    }
}

// Account.contextType = ThemeContext;

const mapStateToProps = (state: any) => {
    return {
        userBalance: state.index.userBalanceInfo,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUserBalance: (params: any) => {
            dispatch({
                type: 'updateUserBalance',
                params,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
