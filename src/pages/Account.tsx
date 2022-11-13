//// Account.tsx - account update page
import { FC, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AccountProps {
    player: {
        id: number,
        name: string,
        username: string,
        email: string,
        joined: string,
    },
    setPlayer: (data: object) => void,
}

const Account: FC<AccountProps> = ({ player, setPlayer }) => {
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("LOGGED_IN");
        if (isLoggedIn) {
            const playerInfo = JSON.parse(isLoggedIn);
            setPlayer(playerInfo);
        }
    }, [setPlayer])

    return (
        <div className='account'>
            <motion.h1 animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }}>Update Account Information</motion.h1>

            <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }} className="updateForm">
                <div>
                    <p>Name: {player.name}</p>
                    <p>Email: {player.email}</p>
                    <p>Joined: {(player.joined).slice(0, 10)}</p>
                </div>
                <div>
                    <label htmlFor="password">New Password:</label>
                    <input type="password" />
                </div>
                <div>
                    <label htmlFor="password">Confirm New Password:</label>
                    <input type="password" />
                </div>
            </motion.div>
        </div>
    )
}

export default Account;