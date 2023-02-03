//// ProfileMenu.tsx - profile menu component
import { motion } from 'framer-motion';
import { FC } from 'react';

interface ProfileMenuProps {
    onMenuCardClick: (value: string) => void,
}

const ProfileMenu: FC<ProfileMenuProps> = ({ onMenuCardClick }) => {

    return (
        <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.8 }} className="profileMenu">
            <button className='alternateBtn' onClick={() => onMenuCardClick('build')}>Build A Deck</button>
            <button className='alternateBtn'>View Your Decks</button>
            <button className='alternateBtn'>View Current Metagame<br />(external link)</button>
        </motion.div>
    )
}

export default ProfileMenu;