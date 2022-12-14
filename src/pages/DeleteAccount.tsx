//// DeleteAccount.tsx - page to redirect to after account deletion
import { motion } from 'framer-motion';
import { TfiFaceSad } from 'react-icons/tfi';
import Button from "../components/Button";
import '../stylesheets/delete.css';

const DeleteAccount = () => {
    const iconStyle: React.CSSProperties = {
        fontSize: '10rem',
        color: 'lightgrey',
    }

    return (
        <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }} className="deletePage">
            <TfiFaceSad style={iconStyle}/>
            <h1>We're Sorry To See You Go...</h1>
            <h2>But feel free to sign up again at any time!</h2>

            <Button route={'/'} name={'Homepage'}/>
        </motion.div>
    )
}

export default DeleteAccount;