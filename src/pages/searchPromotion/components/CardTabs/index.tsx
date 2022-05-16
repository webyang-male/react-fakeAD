import React, { Component } from 'react';
import CardItem from './CardItem';
import { CardItemType } from './types';
import './style.scss';

interface IProps {
    cardData: CardItemType[];
    onChange?: (selectedId: string) => void;
}

class CardTabs extends Component<IProps> {
    handleCardItemClick = (selectedId: string) => {
        const { onChange } = this.props;
        if (onChange) {
            onChange(selectedId);
        }
    }

    render() {
        const { cardData } = this.props;
        return (
            <div className="search-page-card-tabs-component-box">
                {
                    cardData.map((cardItem: CardItemType, index: number) => (
                        <CardItem
                            name={cardItem.name}
                            currentValue={cardItem.currentValue}
                            contemporaryValue={cardItem.contemporaryValue}
                            isSelected={cardItem.isSelected}
                            id={cardItem.id}
                            onClick={(selectedId: string) => { this.handleCardItemClick(selectedId); }}
                            key={`carditem${index.toString()}`}
                        />
                    ))
                }
            </div>
        );
    }
}

export default CardTabs;
