//// Logout.tsx - log out page component
import { motion } from 'framer-motion';
import Button from "../components/Button";
import "../stylesheets/logout.css";

const Logout = () => {
    return (
        <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }} className="logout">
            <h1>You Have Successfully<br />Logged Out!</h1>

            <div>
                <p>Not what you were looking for?</p>
                <Button route={"/login"} name={"Log In"} />
            </div>
        </motion.div>
    )
}

export default Logout;