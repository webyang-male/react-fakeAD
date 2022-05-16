import React from 'react';
import { Carousel } from 'antd';
import {
    newsData1, newsData2, newsData3, newsData4,
} from 'common/constants/news';
import './style.scss';

interface IProps {}
interface IStates {}

class ProductNews extends React.Component<IProps, IStates> {
    render() {
        return (
            <div className="product-news-component-box">
                <Carousel>
                    <div className="news-list">
                        {
                            newsData1.map((newsItem: any, index: number) => (
                                <div className="news-item" key={`news-item-${index.toString()}`}>
                                    <div className="title">{newsItem.title}</div>
                                    <div className="other-info">
                                        <div className="source">{newsItem.source}</div>
                                        <div className="time">{newsItem.time}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="news-list">
                        {
                            newsData2.map((newsItem: any, index: number) => (
                                <div className="news-item" key={`news-item-${index.toString()}`}>
                                    <div className="title">{newsItem.title}</div>
                                    <div className="other-info">
                                        <div className="source">{newsItem.source}</div>
                                        <div className="time">{newsItem.time}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="news-list">
                        {
                            newsData3.map((newsItem: any, index: number) => (
                                <div className="news-item" key={`news-item-${index.toString()}`}>
                                    <div className="title">{newsItem.title}</div>
                                    <div className="other-info">
                                        <div className="source">{newsItem.source}</div>
                                        <div className="time">{newsItem.time}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="news-list">
                        {
                            newsData4.map((newsItem: any, index: number) => (
                                <div className="news-item" key={`news-item-${index.toString()}`}>
                                    <div className="title">{newsItem.title}</div>
                                    <div className="other-info">
                                        <div className="source">{newsItem.source}</div>
                                        <div className="time">{newsItem.time}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default ProductNews;
