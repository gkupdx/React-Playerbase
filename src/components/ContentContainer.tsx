//// CardContainer.tsx - card container component
import { motion } from 'framer-motion';
import { GiCardBurn } from 'react-icons/gi';

import Deck from './Deck';
import ScrollWrapper from './ScrollWrapper';
import nicolBolas from '../assets/planeswalkers/nicol_bolas_grixis.jpg';

const ContentContainer = () => {
    const iconStyle: React.CSSProperties = {
        fontSize: '5rem',
        color: '#ffcc4d',
        opacity: '0.9',
    }

    return (
        <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.8 }} className='contentContainer'>
            <div>
                <h2>Your Active Deck</h2>
                <GiCardBurn style={iconStyle} />

                <ScrollWrapper>
                    <Deck deckName={'Grixis Midrange'} bgImageUrl={nicolBolas}/>
                </ScrollWrapper>
            </div>
        </motion.div>
    )
}

export default ContentContainer;