//// Logout.tsx - log out page component
import { motion } from 'framer-motion';
import Button from "../components/Button";
import "../stylesheets/logout.css";

const Logout = () => {
    return (
        <div className="logout">
            <motion.h1 animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }}>You Have Successfully<br />Logged Out!</motion.h1>

            <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }}>
                <p>Not what you were looking for?</p>
                <Button route={"/login"} name={"Log In"} />
            </motion.div>
        </div>
    )
}

export default Logout;