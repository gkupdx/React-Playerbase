//// Profile.tsx - profile page
import { FC, useEffect } from 'react';
import { FaTools } from 'react-icons/fa';
// import Youtube, { YouTubeProps } from 'react-youtube';
import Card from '../components/Card';
import '../stylesheets/profile.css';

interface ProfileProps {
    player: {
        id: string,
        name: string,
        username: string,
        email: string,
        joined: string
    },
    setPlayer: (data: object) => void,
}

const Profile: FC<ProfileProps> = ({ player, setPlayer }) => {
    const iconStyle = {
        fontSize: '5rem',
        color: '#ffcc4d',
        opacity: '0.9',
    }

    // check to see if a user is logged in on page refresh
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("LOGGED_IN");
        if (isLoggedIn) {
            const playerInfo = JSON.parse(isLoggedIn);
            setPlayer(playerInfo);
        }
    }, [setPlayer]);

    return (
        <div className='profile'>
            <h1>Welcome back, {player.username}!</h1>

            <div className='cardsContainer'>
                <Card name={"Build"} icon={<FaTools style={iconStyle} />} />
            </div>
        </div>
    )
}

export default Profile;