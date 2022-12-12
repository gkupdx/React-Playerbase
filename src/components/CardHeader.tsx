//// CardHeader.tsx - truncated version of a card where only the name + cmc is shown (for deck)
import { FC } from 'react';

interface CardHeaderProps {
    imageSrc: string,
}

const CardHeader: FC<CardHeaderProps> = ({ imageSrc }) => {
    const cardHeaderStyle: React.CSSProperties = {
        width: '150px',
        height: '200px',
        boxShadow: '0 5px 5px 0 #000',
    }

    return (
        <img style={cardHeaderStyle} src={imageSrc} alt='Card Header'/>
    )
}

export default CardHeader;