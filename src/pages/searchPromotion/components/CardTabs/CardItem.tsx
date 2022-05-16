import React, { Component } from 'react';
import './style.scss';

interface IProps {
    name: string;
    currentValue: string | number;
    contemporaryValue: string | number;
    isSelected: boolean;
    id: string;
    onClick: (id: string) => void;
}

class CardItem extends Component<IProps> {
    handleClick = (id: string) => {
        const { onClick } = this.props;
        if (onClick) {
            onClick(id);
        }
    }

    render() {
        const {
            name, currentValue, contemporaryValue, id, isSelected,
        } = this.props;
        // eslint-disable-next-line
        const cardItemStyle = isSelected ? 'search-page-card-item-component-box search-page-card-item-selected' : 'search-page-card-item-component-box';
        return (
            <div className={cardItemStyle} onClick={() => { this.handleClick(id); }}>
                <div className="info">
                    <div className="name-persent">
                        <div className="name">{name}</div>
                        <div className="persent">{currentValue}</div>
                    </div>
                    <div className="value">
                        <div>
                            <span>
                                当期：
                                {currentValue}
                            </span>
                            <span>
                                同期：
                                {contemporaryValue}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardItem;
