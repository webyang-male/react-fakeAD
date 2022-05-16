import React from 'react';
import { Carousel } from 'antd';
import './style.scss';

class IndexBanner extends React.Component {
    render() {
        return (
            <div className="index-banner-component-box">
                <Carousel autoplay>
                    <div>
                        <img src="assets/imgs/index-banner1.png" alt="" />
                    </div>
                    <div>
                        <img src="assets/imgs/index-banner2.png" alt="" />
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default IndexBanner;
