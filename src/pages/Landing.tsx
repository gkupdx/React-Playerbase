//// Landing.tsx - landing page 
import { motion } from 'framer-motion';
import Button from '../components/Button';
import '../stylesheets/landing.css';

const Landing = () => {
    return (
        <div className="landing">
            <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 400, opacity: 0.5 }} transition={{ type: "tween", duration: 0.4 }} className='headerContainer'>
                <img src={require('../assets/playerbase_logo2.png')} alt="Main logo" />
                <h2>design. build. explore.</h2>
            </motion.div>

            <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 400, opacity: 0.5 }} transition={{ type: "tween", duration: 0.5 }} className='btnContainer'>
                <Button route={"/login"} name={"Log In"} />
                <Button route={"/register"} name={"Register"} />
            </motion.div>
        </div>
    )
}

export default Landing;