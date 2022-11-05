//// Register.tsx - registration page
import { useNavigate } from 'react-router-dom';
import { useState, FC } from 'react';
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
    const navigate = useNavigate();

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
                        loadPlayer(player);
                        navigate(`/profile/${player.id}`);
                    }
                })
        } else {
            console.log(`Passwords don't match.`);
        }
    }

    return (
        <div className="register">
            <h1>Register For a New Account</h1>
            <div className="regForm">
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

                <button onClick={onRegSubmit} type="submit">Submit</button>
            </div>
        </div>
    )
}

export default Register;