import React from "react";
import PropTypes from 'prop-types';
import { CardItemType } from "../../types";
import { CardItem } from "../CardItem/CardItem";
import "./CardGrid.scss"

interface CardGridProps { 
    cards: CardItemType[];
    guessedItems: number[];
    selectedItems: number[];
    selectItem: (index: number) => () => void;
}
export const CardGrid: React.FC<CardGridProps> = (
    { cards, selectedItems, guessedItems, selectItem }
): JSX.Element => {

    return (
        <div className={`card-grid size-${cards.length}`}>
            {cards.map((cardItem, index) => 
                <CardItem 
                    key={cardItem.id}
                    isSelected={selectedItems.includes(index)}
                    isFinished={guessedItems.includes(index)}
                    cardItem={cardItem} 
                    onClick={selectItem(index)} 
                />
            )}
        </div>
    )
}

CardGrid.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            imgUrl: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    selectedItems: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    guessedItems: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    selectItem: PropTypes.func.isRequired,
}