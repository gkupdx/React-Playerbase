//// Card.tsx - individual card component for a Magic: The Gathering card
import { FC } from 'react';

interface CardProps {
    cardImage: string,
}

const Card: FC<CardProps> = ({ cardImage }) => {
    return (
        <img width='246px' height='346px' src={cardImage} alt="Card" />
    )
}

export default Card;