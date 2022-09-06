import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import moment from "moment";
import { useIdleActivity } from "../../hooks";
import { CardItemType } from "../../types";
import { CardItem } from "../CardItem/CardItem";
import { Modal } from "../Modal";
import "./CardGrid.scss"

type Props = { 
    cards: CardItemType[];
    newGame: () => void;
}
export const CardGrid: React.FC<Props> = ({ cards, newGame }) => {
    const [guessedItems, setGuessedItems] = useState<number[]>([]);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [isShowModal, setСontinueTimer] = useIdleActivity();
    const [countAttempts, setCountAttempts] = useState<number>(0);
    const timerRef = useRef(0);

    const isFinishedGame = cards.length === guessedItems.length;
    const resultTime = useMemo(
        () => moment.utc(timerRef.current * 1000).format('HH:mm:ss')
        , [isFinishedGame]
    )

    const checkItems = (firstItemIndex: number, secondItemIndex: number) => {
        if(cards) {
            if (cards[firstItemIndex].name === cards[secondItemIndex].name) {
                setGuessedItems([...guessedItems, firstItemIndex, secondItemIndex]);
            }
            setCountAttempts(countAttempts + 1);
            setTimeout(() => {
                setSelectedItems([]);
            }, 800);
        }
    }

    const selectItem = useCallback((index: number) => () => {
        if(!guessedItems.includes(index)) {
            switch (selectedItems.length) {
                case 0:
                    setSelectedItems([index]);
                    break;
                case 1:
                    if (selectedItems[0] !== index) {
                        setSelectedItems(selectedItems.concat(index));
                        checkItems(selectedItems[0], index);
                    }
                    break;
                case 2:
                    setSelectedItems([]);
                    setTimeout(() => {
                        setSelectedItems([index]);
                    }, 200)
                    break;
              }
        }
    }, [guessedItems, selectedItems])

    useEffect(() => {
        const timer = setInterval(() => {
            if(!isShowModal && !isFinishedGame) {
                timerRef.current++;
            }
        }, 1000);

        return () => {clearInterval(timer)};
    }, [isShowModal, isFinishedGame])

    return (
        <>
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
            <Modal isOpen={isShowModal}>
                <div className="idle-activity">
                    <h3>Готов продолжить?</h3>
                    <button onClick={setСontinueTimer}>ДА</button>
                </div>
            </Modal>
            <Modal isOpen={isFinishedGame}>
                <div className="finish-game">
                    <div>Ваш результат: {resultTime}</div>
                    <div>Количество попыток: {countAttempts}</div>
                    <h3>Начать новую игру?</h3>
                    <button onClick={newGame}>ДА</button>
                </div>
            </Modal>
        </>
    )
}