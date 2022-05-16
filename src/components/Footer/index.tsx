import React from 'react';
import { MENU_FOOTER_CONFIG } from 'common/constants/menu';
import './style.scss';

interface IProps {}
interface IStates {}

class Footer extends React.Component<IProps, IStates> {
    render() {
        return (
            <div className="footer-component-box">
                <div className="footer-menu">
                    {
                        MENU_FOOTER_CONFIG.map((menuItem, index) => (
                            <div
                                className="footer-menu-item"
                                key={`footer-menu-item${index.toString()}`}
                            >
                                {menuItem.title}
                            </div>
                        ))
                    }
                </div>
                <div className="footer-copyright"><a>©2021  使用前必读 京公安网备 00000001号 互联网信息服务许可 我已阅读并接受谷妹推广服务合同 欢迎访问谷妹推广政策中心</a></div>
            </div>
        );
    }
}

export default Footer;
