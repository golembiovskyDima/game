import React from "react";
import { CardItemType } from "../../types";
import "./CardItem.scss";

type Props = { 
    cardItem: CardItemType;
    isSelected: boolean;
    isFinished: boolean;
    onClick: () => void;
}
export const CardItem: React.FC<Props> = ({ cardItem, isSelected, isFinished, onClick }) => {
    const styles = ((isSelected && "selected") || (isFinished && "finished")) || "";

    return (
        <div className={`card-item ${styles}`} onClick={onClick}>
            <div className="back">?</div>
            <div className="front" style={{backgroundImage: `url(${cardItem.imgUrl})`}}/>
        </div> 
    )
}