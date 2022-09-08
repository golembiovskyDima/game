import React from "react";
import PropTypes from 'prop-types';
import { CardItemType } from "../../types";
import "./CardItem.scss";

interface CardItemProps { 
    cardItem: CardItemType;
    isSelected: boolean;
    isFinished: boolean;
    onClick: () => void;
}
export const CardItem: React.FC<CardItemProps> = ({ cardItem, isSelected, isFinished, onClick }) => {
    const styles = ((isSelected && "selected") || (isFinished && "finished")) || "";

    return (
        <div className={`card-item ${styles}`} onClick={onClick}>
            <div className="back">?</div>
            <div className="front" style={{backgroundImage: `url(${cardItem.imgUrl})`}}/>
        </div> 
    )
}

CardItem.propTypes = {
    cardItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
    }).isRequired,
    isSelected: PropTypes.bool.isRequired,
    isFinished: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}