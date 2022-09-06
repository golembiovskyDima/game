import React, { useCallback, useMemo, useState } from "react";
import { CardItemType } from "../../types";
import { CardGrid } from "../CardGrid";
import { SelectAmountCards } from "../SelectAmountCards";
import  "./Main.scss";

const allCards: CardItemType[] = [
    {
        id: 1,
        name: 'apple',
        imgUrl: 'http://localhost:3000/img/apple.png'
    },
    {
        id: 2,
        name: 'apple',
        imgUrl: 'http://localhost:3000/img/apple.png'
    },
    {
        id: 3,
        name: 'apricot',
        imgUrl: 'http://localhost:3000/img/apricot.png'
    },
    {
        id: 4,
        name: 'apricot',
        imgUrl: 'http://localhost:3000/img/apricot.png'
    },
    {
        id: 5,
        name: 'avocado',
        imgUrl: 'http://localhost:3000/img/avocado.png'
    },
    {
        id: 6,
        name: 'avocado',
        imgUrl: 'http://localhost:3000/img/avocado.png'
    },
    {
        id: 7,
        name: 'banana',
        imgUrl: 'http://localhost:3000/img/banana.png'
    },
    {
        id: 8,
        name: 'banana',
        imgUrl: 'http://localhost:3000/img/banana.png'
    },
    {
        id: 9,
        name: 'beetBeetroot',
        imgUrl: 'http://localhost:3000/img/beet_beetroot.png'
    },
    {
        id: 10,
        name: 'beetBeetroot',
        imgUrl: 'http://localhost:3000/img/beet_beetroot.png'
    },
    {
        id: 11,
        name: 'cabbage',
        imgUrl: 'http://localhost:3000/img/cabbage.png'
    },
    {
        id: 12,
        name: 'cabbage',
        imgUrl: 'http://localhost:3000/img/cabbage.png'
    },
    {
        id: 13,
        name: 'carambola',
        imgUrl: 'http://localhost:3000/img/carambola.png'
    },
    {
        id: 14,
        name: 'carambola',
        imgUrl: 'http://localhost:3000/img/carambola.png'
    },
    {
        id: 15,
        name: 'carrot',
        imgUrl: 'http://localhost:3000/img/carrot.png'
    },
    {
        id: 16,
        name: 'carrot',
        imgUrl: 'http://localhost:3000/img/carrot.png'
    },
    {
        id: 17,
        name: 'cherry',
        imgUrl: 'http://localhost:3000/img/cherry.png'
    },
    {
        id: 18,
        name: 'cherry',
        imgUrl: 'http://localhost:3000/img/cherry.png'
    },
    {
        id: 19,
        name: 'corns',
        imgUrl: 'http://localhost:3000/img/corns.png'
    },
    {
        id: 20,
        name: 'corns',
        imgUrl: 'http://localhost:3000/img/corns.png'
    },
    {
        id: 21,
        name: 'dragon',
        imgUrl: 'http://localhost:3000/img/dragon.png'
    },
    {
        id: 22,
        name: 'dragon',
        imgUrl: 'http://localhost:3000/img/dragon.png'
    },
    {
        id: 23,
        name: 'eggplantAubergine',
        imgUrl: 'http://localhost:3000/img/eggplant_aubergine.png'
    },
    {
        id: 24,
        name: 'eggplantAubergine',
        imgUrl: 'http://localhost:3000/img/eggplant_aubergine.png'
    },
    {
        id: 25,
        name: 'grape',
        imgUrl: 'http://localhost:3000/img/grape.png'
    },
    {
        id: 26,
        name: 'grape',
        imgUrl: 'http://localhost:3000/img/grape.png'
    },
    {
        id: 27,
        name: 'guava',
        imgUrl: 'http://localhost:3000/img/guava.png'
    },
    {
        id: 28,
        name: 'guava',
        imgUrl: 'http://localhost:3000/img/guava.png'
    },
    {
        id: 29,
        name: 'strawberry',
        imgUrl: 'http://localhost:3000/img/strawberry.png'
    },
    {
        id: 30,
        name: 'strawberry',
        imgUrl: 'http://localhost:3000/img/strawberry.png'
    },
    {
        id: 31,
        name: 'kiwi',
        imgUrl: 'http://localhost:3000/img/kiwi.png'
    },
    {
        id: 32,
        name: 'kiwi',
        imgUrl: 'http://localhost:3000/img/kiwi.png'
    },
    {
        id: 33,
        name: 'lemon',
        imgUrl: 'http://localhost:3000/img/lemon.png'
    },
    {
        id: 34,
        name: 'lemon',
        imgUrl: 'http://localhost:3000/img/lemon.png'
    },
    {
        id: 35,
        name: 'lychee',
        imgUrl: 'http://localhost:3000/img/lychee.png'
    },
    {
        id: 36,
        name: 'lychee',
        imgUrl: 'http://localhost:3000/img/lychee.png'
    },
    {
        id: 37,
        name: 'mango',
        imgUrl: 'http://localhost:3000/img/mango.png'
    },
    {
        id: 38,
        name: 'mango',
        imgUrl: 'http://localhost:3000/img/mango.png'
    },
    {
        id: 39,
        name: 'mangosteen',
        imgUrl: 'http://localhost:3000/img/mangosteen.png'
    },
    {
        id: 40,
        name: 'mangosteen',
        imgUrl: 'http://localhost:3000/img/mangosteen.png'
    },
    {
        id: 41,
        name: 'melon',
        imgUrl: 'http://localhost:3000/img/melon.png'
    },
    {
        id: 42,
        name: 'melon',
        imgUrl: 'http://localhost:3000/img/melon.png'
    },
    {
        id: 43,
        name: 'onions',
        imgUrl: 'http://localhost:3000/img/onions.png'
    },
    {
        id: 44,
        name: 'onions',
        imgUrl: 'http://localhost:3000/img/onions.png'
    },
    {
        id: 45,
        name: 'papaya',
        imgUrl: 'http://localhost:3000/img/papaya.png'
    },
    {
        id: 46,
        name: 'papaya',
        imgUrl: 'http://localhost:3000/img/papaya.png'
    },
    {
        id: 47,
        name: 'passion',
        imgUrl: 'http://localhost:3000/img/passion.png'
    },
    {
        id: 48,
        name: 'passion',
        imgUrl: 'http://localhost:3000/img/passion.png'
    },
    {
        id: 49,
        name: 'peach',
        imgUrl: 'http://localhost:3000/img/peach.png'
    },
    {
        id: 50,
        name: 'peach',
        imgUrl: 'http://localhost:3000/img/peach.png'
    },
    {
        id: 51,
        name: 'peanut',
        imgUrl: 'http://localhost:3000/img/peanut.png'
    },
    {
        id: 52,
        name: 'peanut',
        imgUrl: 'http://localhost:3000/img/peanut.png'
    },
    {
        id: 53,
        name: 'pear',
        imgUrl: 'http://localhost:3000/img/pear.png'
    },
    {
        id: 54,
        name: 'pear',
        imgUrl: 'http://localhost:3000/img/pear.png'
    },
    {
        id: 55,
        name: 'pepper',
        imgUrl: 'http://localhost:3000/img/pepper.png'
    },
    {
        id: 56,
        name: 'pepper',
        imgUrl: 'http://localhost:3000/img/pepper.png'
    },
    {
        id: 57,
        name: 'pineapple',
        imgUrl: 'http://localhost:3000/img/pineapple.png'
    },
    {
        id: 58,
        name: 'pineapple',
        imgUrl: 'http://localhost:3000/img/pineapple.png'
    },
    {
        id: 59,
        name: 'pomegranate',
        imgUrl: 'http://localhost:3000/img/pomegranate.png'
    },
    {
        id: 60,
        name: 'pomegranate',
        imgUrl: 'http://localhost:3000/img/pomegranate.png'
    },
    {
        id: 61,
        name: 'raspberry',
        imgUrl: 'http://localhost:3000/img/raspberry.png'
    },
    {
        id: 62,
        name: 'raspberry',
        imgUrl: 'http://localhost:3000/img/raspberry.png'
    },
    {
        id: 63,
        name: 'watermelon',
        imgUrl: 'http://localhost:3000/img/watermelon.png'
    },
    {
        id: 64,
        name: 'watermelon',
        imgUrl: 'http://localhost:3000/img/watermelon.png'
    },
    {
        id: 65,
        name: 'jackfruit',
        imgUrl: 'http://localhost:3000/img/jackfruit.png'
    },
    {
        id: 66,
        name: 'jackfruit',
        imgUrl: 'http://localhost:3000/img/jackfruit.png'
    },
    {
        id: 67,
        name: 'tomato',
        imgUrl: 'http://localhost:3000/img/tomato.png'
    },
    {
        id: 68,
        name: 'tomato',
        imgUrl: 'http://localhost:3000/img/tomato.png'
    },
]

export const Main = () => {
    const [amount, setAmount] = useState<number | null>(null);
    const newGame = () => {
        setAmount(null);
    }

    const fillteredCard = useMemo(() => {
        if(amount) {
            return allCards.slice(0, amount)
                            .sort(() =>  0.5 - Math.random());
        } else {
            return null;
        }
    }, [amount])

    return (
       <div className="container">
            {fillteredCard 
                ? (
                    <CardGrid 
                        cards={fillteredCard}
                        newGame={newGame}
                    />
                )
                : <SelectAmountCards onSelect={setAmount} />
            }
       </div> 
    )
}