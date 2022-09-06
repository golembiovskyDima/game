import React, { MouseEvent } from "react";
import "./SelectAmountCards.scss";

type Props = {
    onSelect: (amount: number) => void;
}

const variants = [ 36, 48, 64 ]
export const SelectAmountCards: React.FC<Props> = ({ onSelect }) => {

    const clickHandle = (variant: number) => (event: MouseEvent<HTMLButtonElement>) => {
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
                    onClick={clickHandle(variant)}
                >
                    {variant}
                </button>
            )}
        </div>
    )
}