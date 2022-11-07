//// Card.tsx - card component
import { FC } from 'react';

interface CardProps {
    name: string,
}

const Card: FC<CardProps> = ({ name }) => {
    return (
        <div className="card">
            {name}
        </div>
    )
}

export default Card;