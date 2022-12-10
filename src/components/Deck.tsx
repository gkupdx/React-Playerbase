//// Deck.tsx - individual component for a deck
import React, { FC }  from 'react';
import CardHeader from '../components/CardHeader';

interface DeckProps {
    cardList: React.ComponentState,
}

const Deck: FC<DeckProps> = ({ cardList }) => {
    return (
        <div className='deck'>
            {cardList.map((item: React.ComponentState) => {
                return <CardHeader key={item.id} imageSrc={item.cardImageUri} />
            })}
        </div>
    )
}

export default Deck;