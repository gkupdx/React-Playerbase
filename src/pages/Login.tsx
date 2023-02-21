//// Login.tsx - login page
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../features/authenticate';
import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsArrowLeft } from 'react-icons/bs';
import '../stylesheets/login.css';

interface LoginProps {
    loadPlayer: (data: Object) => void,
}

const Login: FC<LoginProps> = ({ loadPlayer }) => {
    const [clientWidth, setClientWidth] = useState(window.innerWidth);
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [validateFields, setValidateFields] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let errorMsgDisplay: DocumentVisibilityState = 'hidden';

    if (validateFields === false) {
        errorMsgDisplay = 'visible'
    }

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailField(event.target.value);
    }

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordField(event.target.value);
    }

    const onLoginSubmit = () => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: emailField,
                password: passwordField
            })
        })
            .then(res => res.json())
            .then(player => {
                if (player.id) {
                    localStorage.setItem("LOGGED_IN", JSON.stringify(player));
                    dispatch(authenticateUser({ authenticated: player.id }));
                    loadPlayer(player);
                    navigate(`/profile/${player.id}`);
                } else {
                    setValidateFields(false);
                }
            })
    }

    // update browser width state on resize
    useEffect(() => {
        const updateClientWidth = () => {
            setClientWidth(window.innerWidth);
        }

        window.addEventListener('resize', updateClientWidth);

        return () => {
            window.removeEventListener('resize', updateClientWidth);
        }
    });

    return (
        <>
            {clientWidth >= 768 ?
                <div className="login">
                    <motion.h1 animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }}>Login To Your Account</motion.h1>

                    <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }} className="loginForm">
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input onChange={onEmailChange} type="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input onChange={onPasswordChange} type="password" />
                        </div>

                        <p style={{ visibility: errorMsgDisplay }}>Sorry, the email or password is incorrect.</p>

                        <button onClick={onLoginSubmit} type="submit" className="primaryBtn">Submit</button>
                    </motion.div>
                </div>
                :
                <div className="login">
                    <motion.button id="arrowLeft" onClick={() => navigate('/')} animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }}><BsArrowLeft /></motion.button>

                    <motion.h1 animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }}>Login To Your Account</motion.h1>

                    <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }} className="loginForm">
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input onChange={onEmailChange} type="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input onChange={onPasswordChange} type="password" />
                        </div>

                        <p style={{ visibility: errorMsgDisplay }}>Sorry, the email or password is incorrect.</p>

                        <button onClick={onLoginSubmit} type="submit" className="primaryBtn">Submit</button>
                    </motion.div>
                </div>}
        </>
    )
}

export default Login;