//// Profile.tsx - profile page
import { FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { VscGear } from 'react-icons/vsc';
import { motion, AnimatePresence } from 'framer-motion';

import CardContainer from '../components/CardContainer';
import '../stylesheets/profile.css';

interface ProfileProps {
    player: {
        id: number,
        name: string,
        username: string,
        email: string,
        joined: string
    },
    setPlayer: (data: object) => void,
}

const Profile: FC<ProfileProps> = ({ player, setPlayer }) => {
    const [toggleSettings, setToggleSettings] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    // check to see if a user is logged in on page refresh
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("LOGGED_IN");
        if (isLoggedIn) {
            const playerInfo = JSON.parse(isLoggedIn);
            if (playerInfo.id !== Number(id)) {
                navigate('/error');
            }
            setPlayer(playerInfo);
        } else {
            navigate('/error');
        }
    }, [setPlayer, id, navigate]);

    return (
        <div className='profile'>
            <motion.button animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }} onClick={() => setToggleSettings(!toggleSettings)} className='settingsBtn'><VscGear style={{ fontSize: '1.4rem' }} /> 
                Settings
            </motion.button>
            <AnimatePresence>
                {toggleSettings &&
                    <motion.div 
                        className='settingsModal' 
                        animate={{ x: -200 }} 
                        initial={{ x: 200 }}
                        transition={{ type: "tween", duration: 0.5 }}
                        exit={{ x: 200}}>

                        <button onClick={() => navigate(`/account/${player.id}/update-info`)}>Update Login Password</button>
                        <button>Delete Account (PERMANENT)</button>
                    </motion.div>}
            </AnimatePresence>

            <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }} className='headerContainer'>
                <h1>Welcome back, {player.username}!</h1>
            </motion.div>

            <CardContainer />
        </div>
    )
}

export default Profile;