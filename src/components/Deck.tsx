//// Deck.tsx - individual component for a deck
import React, { FC } from 'react';

interface DeckProps {
    cardList: React.ComponentState,
}

const Deck: FC<DeckProps> = ({ cardList }) => {
    const cardImgStyle = {
        width: '150px',
        height: '200px',
        boxShadow: '0 5px 5px 0 #000',
    }

    const handleContextMenu = (event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault();

        console.log("RMB clicked");
    }

    return (
        <div className='deck'>
            {cardList[0].id === 0 && <p>Cards added to the deck will be displayed here</p>}

            {cardList[0].id !== 0 && cardList.map((card: React.ComponentState) => {
                return <img key={card.id} onContextMenu={(e) => handleContextMenu(e)} style={cardImgStyle} src={card.cardImageUri} alt={card.cardImageUri} />
            })}
        </div>
    )
}

export default Deck;