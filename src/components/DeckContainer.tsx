//// CardContainer.tsx - card container component
import { motion } from 'framer-motion';
import { FC } from 'react';
// import { GiCardBurn } from 'react-icons/gi';

import Deck from './Deck';
import DeckColor from './DeckColor';
import ScrollWrapper from './ScrollWrapper';
import nicolBolas from '../assets/planeswalkers/nicol_bolas_grixis.jpg';

interface DeckContainerProps {
    deckName: string,
    cardList: React.ComponentState,
    cardCount: React.ComponentState,
}

const DeckContainer: FC<DeckContainerProps> = ({ deckName, cardList, cardCount }) => {

    return (
        <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.8 }} className='deckContainer'>
            <div>
                <ScrollWrapper>
                    <div className='deckHeader' style={{ backgroundImage: `url(${nicolBolas})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <h2>Grixis Midrange</h2>
                        <DeckColor deckName={deckName}/>
                    </div>

                    <Deck cardList={cardList}/>
                </ScrollWrapper>

                <p className='totalCards'>Total card count: {cardCount}</p>
            </div>
        </motion.div>
    )
}

export default DeckContainer;