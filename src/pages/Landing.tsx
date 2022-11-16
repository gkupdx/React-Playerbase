//// Landing.tsx - landing page 
import { motion } from 'framer-motion';
import { FC, useEffect } from 'react';
import { checkLoginStatus } from '../utilities/checkLoginUtility';
import Button from '../components/Button';
import '../stylesheets/landing.css';

interface LandingProps {
    player: {
        id: number,
        name: string,
        username: string,
        email: string,
        joined: string,
    },
    setPlayer: (data: object) => void,
}

const Landing: FC<LandingProps> = ({ player, setPlayer }) => {
    useEffect(() => {
        checkLoginStatus(setPlayer);
    }, [setPlayer])

    return (
        <div className="landing">
            <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 400, opacity: 0.7 }} transition={{ type: "tween", duration: 0.7 }} className='headerContainer'>
                <img src={require('../assets/playerbase_logo2.png')} alt="Main logo" />
                <h2>your one-stop hub.</h2>
            </motion.div>

            {player.username === '' ?
                <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 400, opacity: 0.7 }} transition={{ type: "tween", duration: 0.8 }} className='btnContainer'>
                    <Button route={"/login"} name={"Log In"} />
                    <Button route={"/register"} name={"Register"} />
                </motion.div> :
                <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 400, opacity: 0.7 }} transition={{ type: "tween", duration: 0.8 }} style={{ flexDirection: 'column'}} className='btnContainer'>
                    <h3>Hey <span style={{ color: '#EF5B5B' }}>{player.username}</span>, got new decks to brew?</h3>
                    <Button route={`/profile/${player.id}`} name={"Back To Brewing!"} />
                </motion.div>
            }

            <motion.p animate={{ y: 0, opacity: 1 }} initial={{ y: 400, opacity: 0.7 }} transition={{ type: "tween", duration: 0.8 }}>
                &copy; 2022 Grady J. Ku
            </motion.p>
        </div>
    )
}

export default Landing;