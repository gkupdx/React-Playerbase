//// Button.tsx - individual "button" component
import { FC } from 'react';

interface BtnProps {
    onClick: Function,
    name: string,
}

const Button: FC<BtnProps> = ({ name }) => {
    return (
        <button className='button'>{name}</button>
    )
}

export default Button;