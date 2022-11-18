//// Account.tsx - account update page
import { FC, useState} from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { authenticateUser } from '../features/authenticate';

interface AccountProps {
    player: {
        id: number,
        name: string,
        username: string,
        email: string,
        joined: string,
    },
}

const Account: FC<AccountProps> = ({ player }) => {
    const [newPassword, setNewPassword] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    const [matchPasswords, setMatchPasswords] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let errorMsgDisplay: DocumentVisibilityState = 'hidden';

    if (matchPasswords === false) {
        errorMsgDisplay = 'visible'
    }

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
    }

    const onConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassConfirm(event.target.value);
    }

    const onUpdateSubmit = () => {
        // check that new passwords match
        if (newPassword === passConfirm) {
            fetch('http://localhost:3000/update', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: player.email,
                    newPassword: newPassword
                })
            })
                .then(res => res.json())
                .then(id => {
                    if (id) {
                        localStorage.removeItem("LOGGED_IN");
                        dispatch(authenticateUser({ authenticated: 0 }));
                        navigate(`/profile/${player.id}/update-success`);
                    }
                })
                .catch(error => console.log(error))
        } else {
            setMatchPasswords(false);
        }
    }

    return (
        <div className='account'>
            <motion.h1 animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }}>
                Update Account<br />Information
            </motion.h1>

            <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }} className="updateForm">
                <h3>Account Details:</h3>
                <div>
                    <h2>Name: {player.name}</h2>
                    <h2>Username: {player.username}</h2>
                    <h2>Email: {player.email}</h2>
                    <h2>Joined: {(player.joined).slice(0, 10)}</h2>
                </div>

                <h3>Update:</h3>
                <div>
                    <label htmlFor="password">New Password:</label>
                    <input onChange={onPasswordChange} type="password" />
                </div>
                <div>
                    <label htmlFor="password">Confirm New Password:</label>
                    <input onChange={onConfirmChange} type="password" />
                </div>

                <p style={{ visibility: errorMsgDisplay }}>Passwords do not match.</p>

                <button onClick={onUpdateSubmit} type='submit' className='primaryBtn'>Update Password</button>
            </motion.div>

            <motion.h4 onClick={() => navigate(`/profile/${player.id}`)} animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }}><FaArrowAltCircleLeft /> Back To Profile</motion.h4>
        </div>
    )
}

export default Account;