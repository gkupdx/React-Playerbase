//// Navbar.tsx - "navbar" component
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../stylesheets/navbar.css';

const Navbar = () => {
    const [clientWidth, setClientWidth] = useState(window.innerWidth);

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
            {clientWidth >= 768 &&
                <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ type: "tween", duration: 0.7 }} className="navbar">
                    <div>
                        <a href="/"><img src={require('../assets/playerbase_logo2.png')} alt="Playerbase" /></a>
                    </div>
                    <div>
                        <a href="https://github.com/gkupdx/React-Playerbase"><FaGithub /> github</a>
                        <a href="https://www.linkedin.com/in/gkupdx/"><FaLinkedin /> linkedin</a>
                    </div>
                </motion.div>}
        </>
    )
}

export default Navbar;