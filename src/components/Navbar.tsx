//// Navbar.tsx - "navbar" component
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { VscSignOut } from 'react-icons/vsc';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../stylesheets/navbar.css';

interface NavProps {
    loggedIn: boolean
}

const Navbar: FC<NavProps> = ({ loggedIn }) => {
    const navigate = useNavigate();
    let logOutDisplay: DocumentVisibilityState = 'hidden';

    if (loggedIn) {
        logOutDisplay = 'visible'
    }

    return (
        <div className="navbar">
            <div>
                <img onClick={() => navigate('/')} src={require('../assets/playerbase_logo2.png')} alt="Playerbase" />
                <a style={{ visibility: logOutDisplay }} href="/logged-out"><VscSignOut /> Log Out</a>
            </div>
            <div>
                <a href="https://github.com/gkupdx/React-Playerbase"><FaGithub /> GitHub</a>
                <a href="https://www.linkedin.com/in/gkupdx/"><FaLinkedin /> Linkedin</a>
            </div>
        </div>
    )
}

export default Navbar;