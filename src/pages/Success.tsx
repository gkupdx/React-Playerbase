//// Success.tsx - update success page for profile updates
import { motion } from 'framer-motion';
import Button from "../components/Button";
import '../stylesheets/success.css';

const Success = () => {
    return (
        <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }} className="success">
            <h1>Password Update Successful!</h1>

            <div>
                <p>For your safety, please log back in with your updated password.</p>
                <Button route={"/login"} name={"Log In"} />
            </div>
        </motion.div>
    )
}

export default Success;