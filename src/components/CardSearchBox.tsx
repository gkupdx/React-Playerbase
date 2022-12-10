//// CardSearchBox.tsx - individual component for the card search box
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import Card from '../components/Card';

interface SearchBoxProps {
    cardImage: React.ComponentState,
    onCardInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onCardSearch: () => void,
    onCardAdd: () => void,
}

const CardSearchBox: FC<SearchBoxProps> = ({ cardImage, onCardInputChange, onCardSearch, onCardAdd }) => {
    return (
        <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.8 }} className='cardSearchBox'>
            <div>
                <label htmlFor="searchBox">Search for a card to add:</label>
                <input onChange={onCardInputChange} type="text" placeholder="Enter exact card name..." />
                <button onClick={onCardSearch}>Search</button>
                <p>Tip: Don't forget to include commas!</p>
            </div>

            <div className='cardPreview'>
                {cardImage && <Card cardImage={cardImage} />}
                {cardImage === '' && <span>A preview of your card will appear here</span>}
                {cardImage === 'Not Found' && <span>Something went wrong. Please check to make sure the spelling is correct.</span>}
            </div>

            <button onClick={onCardAdd}>Add To Deck</button>
        </motion.div>
    )
}

export default CardSearchBox;