//// Profile.tsx - profile page
import { FC } from 'react';
import '../stylesheets/profile.css';

interface ProfileProps {
    player: {
        id: string,
        name: string,
        username: string,
        email: string,
        joined: string
    }
}

const Profile: FC<ProfileProps> = ({ player }) => {
    return (
        <div className='profile'>
            <h1>Welcome back, {player.username}</h1>
        </div>
    )
}

export default Profile;