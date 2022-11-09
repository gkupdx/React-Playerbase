//// Card.tsx - card component
import { FC } from 'react';

interface CardProps {
    name: string,
    icon: JSX.Element
}

const Card: FC<CardProps> = ({ name, icon }) => {
    return (
        <div className="card">
            {name}
            {icon}
        </div>
    )
}

export default Card;