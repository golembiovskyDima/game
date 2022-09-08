import React, { MouseEvent } from "react";
import PropTypes from 'prop-types';
import "./SelectAmountCards.scss";

interface SelectAmountCardsProps {
    onSelect: (amount: number) => void;
}

const variants = [ 36, 48, 64 ];

export const SelectAmountCards: React.FC<SelectAmountCardsProps> = ({ onSelect }) => {

    const clickHandle = (variant: number) => (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        onSelect(variant);
    } 

    return (
        <div className="wrapper">
            <h2 className="title">Выберете количество карточек</h2>
            {variants.map((variant) =>
                <button
                    key={variant}
                    className="select-button"
                    onClick={clickHandle(variant / 2)}
                >
                    {variant}
                </button>
            )}
        </div>
    )
}

SelectAmountCards.propTypes = {
    onSelect: PropTypes.func.is
}