//// CardContainer.tsx - card container component
import { FC } from 'react';
import { motion } from 'framer-motion';
import { GiCardBurn } from 'react-icons/gi';
import { FaYoutube } from 'react-icons/fa';
import Section from "./Section";

interface CContainerProps {
    id: number,
}

const ContentContainer: FC<CContainerProps> = ({ id }) => {

    const containerStyle: React.CSSProperties = {
        width: "1800px",
        height: "700px",
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
        <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 300, opacity: 0.7 }} transition={{ type: "tween", duration: 0.8 }} style={containerStyle}>
            <Section name={"Metagame"} icon={<GiCardBurn style={iconStyle} />} />
            <Section name={"Your Videos"} icon={<FaYoutube style={iconStyle} />} />
        </motion.div>
    )
}

export default ContentContainer;