import React, { useMemo, useState } from "react";
import { CardItemType, InitCardItem } from "../../types";
import { GameBoard } from "../GameBoard";
import { SelectAmountCards } from "../SelectAmountCards";
import  "./Main.scss";

const allCards: InitCardItem[] = [
    {
        name: 'apple',
        imgUrl: 'http://localhost:3000/img/apple.png'
    },

    {
        name: 'apricot',
        imgUrl: 'http://localhost:3000/img/apricot.png'
    },

    {
        name: 'avocado',
        imgUrl: 'http://localhost:3000/img/avocado.png'
    },
    {
        name: 'banana',
        imgUrl: 'http://localhost:3000/img/banana.png'
    },
    {
        name: 'beetBeetroot',
        imgUrl: 'http://localhost:3000/img/beet_beetroot.png'
    },
    {
        name: 'cabbage',
        imgUrl: 'http://localhost:3000/img/cabbage.png'
    },
    {
        name: 'carambola',
        imgUrl: 'http://localhost:3000/img/carambola.png'
    },
    {
        name: 'carrot',
        imgUrl: 'http://localhost:3000/img/carrot.png'
    },
    {
        name: 'cherry',
        imgUrl: 'http://localhost:3000/img/cherry.png'
    },
    {
        name: 'corns',
        imgUrl: 'http://localhost:3000/img/corns.png'
    },
    {
        name: 'dragon',
        imgUrl: 'http://localhost:3000/img/dragon.png'
    },
    {
        name: 'eggplantAubergine',
        imgUrl: 'http://localhost:3000/img/eggplant_aubergine.png'
    },
    {
        name: 'grape',
        imgUrl: 'http://localhost:3000/img/grape.png'
    },
    {
        name: 'guava',
        imgUrl: 'http://localhost:3000/img/guava.png'
    },
    {
        name: 'strawberry',
        imgUrl: 'http://localhost:3000/img/strawberry.png'
    },
    {
        name: 'kiwi',
        imgUrl: 'http://localhost:3000/img/kiwi.png'
    },
    {
        name: 'lemon',
        imgUrl: 'http://localhost:3000/img/lemon.png'
    },
    {
        name: 'lychee',
        imgUrl: 'http://localhost:3000/img/lychee.png'
    },
    {
        name: 'mango',
        imgUrl: 'http://localhost:3000/img/mango.png'
    },
    {
        name: 'mangosteen',
        imgUrl: 'http://localhost:3000/img/mangosteen.png'
    },
    {
        name: 'melon',
        imgUrl: 'http://localhost:3000/img/melon.png'
    },
    {
        name: 'onions',
        imgUrl: 'http://localhost:3000/img/onions.png'
    },
    {
        name: 'papaya',
        imgUrl: 'http://localhost:3000/img/papaya.png'
    },
    {
        name: 'passion',
        imgUrl: 'http://localhost:3000/img/passion.png'
    },
    {
        name: 'peach',
        imgUrl: 'http://localhost:3000/img/peach.png'
    },
    {
        name: 'peanut',
        imgUrl: 'http://localhost:3000/img/peanut.png'
    },
    {
        name: 'pear',
        imgUrl: 'http://localhost:3000/img/pear.png'
    },
    {
        name: 'pepper',
        imgUrl: 'http://localhost:3000/img/pepper.png'
    },
    {
        name: 'pineapple',
        imgUrl: 'http://localhost:3000/img/pineapple.png'
    },
    {
        name: 'pomegranate',
        imgUrl: 'http://localhost:3000/img/pomegranate.png'
    },
    {
        name: 'raspberry',
        imgUrl: 'http://localhost:3000/img/raspberry.png'
    },
    {
        name: 'watermelon',
        imgUrl: 'http://localhost:3000/img/watermelon.png'
    },
    {
        name: 'jackfruit',
        imgUrl: 'http://localhost:3000/img/jackfruit.png'
    },
    {
        name: 'tomato',
        imgUrl: 'http://localhost:3000/img/tomato.png'
    },
]

export const Main = () => {
    const [amount, setAmount] = useState<number | null>(null);
    const newGame = (): void => {
        setAmount(null);
    }

    const fillteredCard = useMemo((): CardItemType[] | null => {
        if(amount) {
            const sliceArr: InitCardItem[] = allCards.slice(0, amount);
            return sliceArr.concat(sliceArr)
                            .map((item: InitCardItem, index: number) => ({...item, id: index + 1}))
                            .sort(() =>  0.5 - Math.random());
        } else {
            return null;
        }
    }, [amount])

    return (
       <div className="container">
            {fillteredCard && <GameBoard cards={fillteredCard} newGame={newGame} />}
            {!fillteredCard && <SelectAmountCards onSelect={setAmount} />}
       </div> 
    )
}