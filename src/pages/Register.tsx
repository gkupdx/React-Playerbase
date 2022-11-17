//// Register.tsx - registration page
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../features/authenticate';
import { useState, FC } from 'react';
import { motion } from 'framer-motion';
import '../stylesheets/register.css';

interface RegProps {
    loadPlayer: (data: Object) => void;
}

const Register: FC<RegProps> = ({ loadPlayer }) => {
    const [regName, setRegName] = useState('');
    const [regUsername, setRegUsername] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    const [matchPasswords, setMatchPasswords] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let errorMsgDisplay: DocumentVisibilityState = 'hidden';

    if (matchPasswords === false) {
        errorMsgDisplay = 'visible'
    }

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegName(event.target.value);
    }

    const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegUsername(event.target.value);
    }

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegEmail(event.target.value);
    }

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegPassword(event.target.value);
    }

    const onConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassConfirm(event.target.value);
    }

    const onRegSubmit = () => {
        // check that passwords match
        if (regPassword === passConfirm) {
            fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: regName,
                    username: regUsername,
                    email: regEmail,
                    password: regPassword
                })
            })
                .then(res => res.json())
                .then(player => {
                    if (player) {
                        localStorage.setItem("LOGGED_IN", JSON.stringify(player));
                        dispatch(authenticateUser({ authenticated: player.id }))
                        loadPlayer(player);
                        navigate(`/profile/${player.id}`);
                    }
                })
        } else {
            setMatchPasswords(false);
        }
    }

    return (
        <div className="register">
            <motion.h1 animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }}>Register For a New Account</motion.h1>
            <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }} className="regForm">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input onChange={onNameChange} type="text" />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input onChange={onUsernameChange} type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input onChange={onEmailChange} type="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input onChange={onPasswordChange} type="password" />
                </div>
                <div>
                    <label htmlFor="confirmPass">Confirm Password:</label>
                    <input onChange={onConfirmChange} type="password" />
                </div>

                <p style={{ visibility: errorMsgDisplay }}>Passwords do not match.</p>

                <button onClick={onRegSubmit} type="submit" className="primaryBtn">Submit</button>
            </motion.div>
        </div>
    )
}

export default Register;