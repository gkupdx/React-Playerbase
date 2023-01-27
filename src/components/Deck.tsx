//// Deck.tsx - individual component for a deck
import React, { FC } from 'react';

interface DeckProps {
    cardList: React.ComponentState,
}

const Deck: FC<DeckProps> = ({ cardList }) => {

    return (
        <div className='deck'>
            {cardList[0].id === 0 && <p>Cards added to the deck will be displayed here</p>}

            {cardList[0].id !== 0 && cardList.map((card: React.ComponentState) => {
                return (
                    <div key={card.id} style={{ width: '170px', height: '235px', backgroundImage: `url(${card.cardImageUri})`, backgroundPosition: 'center', backgroundSize: 'cover', boxShadow: '0 5px 5px 0 #000'}}>
                        <p className='cardCounter'>x{card.count}</p>
                    </div>)
            })}
        </div>
    )
}

export default Deck;