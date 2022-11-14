//// CardContainer.tsx - card container component
import { motion } from 'framer-motion';
import { FaDiscord, FaReddit, FaYoutube } from 'react-icons/fa';
import Card from "./Card";

const CardContainer = () => {
    const containerStyle: React.CSSProperties = {
        width: "1200px",
        height: "400px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#303030",
        borderRadius: "10px",
        boxShadow: "0 0 15px 0 #000",
    }

    const iconStyle: React.CSSProperties = {
        fontSize: '5rem',
        color: '#ffcc4d',
        opacity: '0.9',
    }

    return (
        <motion.div animate={{ x: 0, opacity: 1 }} initial={{ x: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.5 }} style={containerStyle}>
            <Card name={"Reddit"} icon={<FaReddit style={iconStyle} />} />
            <Card name={"Discord"} icon={<FaDiscord style={iconStyle} />} />
            <Card name={"YouTube"} icon={<FaYoutube style={iconStyle} />} />
        </motion.div>
    )
}

export default CardContainer;