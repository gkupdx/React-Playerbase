//// Login.tsx - login page
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FC } from 'react';
import '../stylesheets/login.css';

interface LoginProps {
    loadPlayer: (data: Object) => void,
    checkLoggedIn: (status: boolean) => void,
}

const Login: FC<LoginProps> = ({ loadPlayer, checkLoggedIn }) => {
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const navigate = useNavigate();

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
                loadPlayer(player);
                checkLoggedIn(true);
                navigate(`/profile/${player.id}`);
            }
        })
    }

    return (
        <div className="login">
            <h1>Login To Your Account</h1>
            <div className="loginForm">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input onChange={onEmailChange} type="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input onChange={onPasswordChange} type="password" />
                </div>

                <button onClick={onLoginSubmit} type="submit">Submit</button>
            </div>
        </div>
    )
}

export default Login;