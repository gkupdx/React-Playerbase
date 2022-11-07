//// Landing.tsx - landing page 
import { motion } from 'framer-motion';
import Button from '../components/Button';
import '../stylesheets/landing.css';

const Landing = () => {
    return (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0.95 }} transition={{ type: "tween", duration: 0.7 }} className="landing">

            <motion.h1 animate={{ y: 0, opacity: 1 }} initial={{ y: 400, opacity: 0.5 }} transition={{ type: "tween", duration: 0.8 }}>Welcome to Playerbase</motion.h1>

            <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 400, opacity: 0.5 }} transition={{ type: "tween", duration: 1 }} className='btnContainer'>
                <Button route={"/login"} name={"Log In"}/>
                <Button route={"/register"} name={"Register"}/>
            </motion.div>
        </motion.div>
    )
}

export default Landing;