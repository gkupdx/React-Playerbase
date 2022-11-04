//// Navbar.tsx - "navbar" component
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../stylesheets/navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="https://github.com/gkupdx/React-Playerbase"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/gkupdx/"><FaLinkedin /> Linkedin</a>
        </div>
    )
}

export default Navbar;