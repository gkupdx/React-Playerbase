//// Card.tsx - card component
import { FC } from 'react';

interface CardProps {
    name: string,
    icon: JSX.Element
}

const Card: FC<CardProps> = ({ name, icon }) => {
    const cardStyle: React.CSSProperties = {
        width: '225px',
        height: '325px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'beige',
        fontFamily: 'Courier Prime, monospace',
        fontSize: '1.7rem',
        borderRadius: '10px',
        boxShadow: '0 2px 5px 2px #000',
        cursor: 'pointer'
    }

    return (
        <div style={cardStyle}>
            {name}
            {icon}
        </div>
    )
}

export default Card;