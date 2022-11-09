//// Navbar.tsx - "navbar" component
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../features/authenticate';
import { VscSignOut } from 'react-icons/vsc';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../stylesheets/navbar.css';

interface NavProps {
    userID: number,
}

const Navbar: FC<NavProps> = ({ userID }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // on log out, hide "Log Out" link, clear localStorage item
    const handleLogOut = () => {
        localStorage.removeItem("LOGGED_IN");
        dispatch(authenticateUser({ authenticated: 0 }));
    } 

    return (
        <div className="navbar">
            <div>
                <img onClick={() => navigate('/')} src={require('../assets/playerbase_logo2.png')} alt="Playerbase" />
                <a onClick={handleLogOut} className={userID !== 0 ? 'logOutVisible' : 'logOutHidden'} href="/logged-out"><VscSignOut /> log out</a>
            </div>
            <div>
                <a href="https://github.com/gkupdx/React-Playerbase"><FaGithub /> github</a>
                <a href="https://www.linkedin.com/in/gkupdx/"><FaLinkedin /> linkedin</a>
            </div>
        </div>
    )
}

export default Navbar;