//// Card.tsx - individual card component for a Magic: The Gathering card
import { FC } from 'react';

interface CardProps {
    cardImage: string,
}

const Card: FC<CardProps> = ({ cardImage }) => {
    return (
        <img width='266px' height='376px' src={cardImage} alt="Card" />
    )
}

export default Card;