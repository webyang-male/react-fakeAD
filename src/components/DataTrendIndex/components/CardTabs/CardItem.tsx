import React from 'react';
import { CardItemType } from './types';
import './style.scss';

interface IProps extends CardItemType {
    onClick?: (id: string) => void;
}

interface IStates { }

class CardItem extends React.Component<IProps, IStates> {
    state = {}

    handleClick = (id: string) => {
        const { onClick } = this.props;
        if (onClick) {
            onClick(id);
        }
    }

    render() {
        const {
            name, value, persent, icon, id, isSelected,
        } = this.props;
        const cardItemStyle = isSelected ? 'carditem-component-box carditem-selected' : 'carditem-component-box';
        const nameTextStyle = isSelected ? 'name-active' : 'name';
        const persentTextStyle = isSelected ? 'persent-active' : 'persent';
        const valueTextStyle = isSelected ? 'value-active' : 'value';
        const iconPath = isSelected ? `${icon}-selected.png` : `${icon}.png`;
        return (
            <div className={cardItemStyle} onClick={() => { this.handleClick(id); }}>
                <img className="icon" src={iconPath} alt="" />
                <div className="info">
                    <div className="name-persent">
                        <div className={nameTextStyle}>{name}</div>
                        {
                            persent && (
                                <div className={persentTextStyle}>{`${persent} %`}</div>
                            )
                        }
                    </div>
                    <div className={valueTextStyle}>{value}</div>
                </div>
            </div>
        );
    }
}

export default CardItem;
