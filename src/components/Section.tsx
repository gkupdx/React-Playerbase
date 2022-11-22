//// Card.tsx - card component
import { FC } from 'react';

interface SectionProps {
    name: string,
    icon: JSX.Element
}

const Section: FC<SectionProps> = ({ name, icon }) => {

    const sectionStyle: React.CSSProperties = {
        width: '800px',
        height: '200px',
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
        <div style={sectionStyle}>
            <p style={{ fontSize: '1.7rem' }}>{name}</p>
            {icon}
        </div>
    )
}

export default Section;