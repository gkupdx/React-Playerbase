//// CardHeader.tsx - truncated version of a card where only the name + cmc is shown (for deck)
import { FC } from 'react';

interface CardHeaderProps {
    cardHeader: string,
}

const CardHeader: FC<CardHeaderProps> = ({ cardHeader }) => {
    const cardHeaderStyle: React.CSSProperties = {
        width: '150px',
        height: '200px',
    }

    return (
        <img style={cardHeaderStyle} src={cardHeader} alt='Card Header'/>
    )
}

export default CardHeader;